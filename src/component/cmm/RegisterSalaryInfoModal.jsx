"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/uidialog";
import {
  Calculator,
  Check,
  ChevronRight,
  Info,
  RotateCw,
  Search,
  UserRoundPlus,
  UsersRound,
  XIcon,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import baseApi from "@/api/baseApi";

export default function RegisterSalaryInfoModal({ open, setOpen, bhcdss }) {
  const [name, setName] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState();

  const registerEmployeeSalary = async () => {
    try {
      const res = await baseApi.post("/api/v1/payroll/register/employees", {
        employeeNo: selectedEmployee?.employeeNo,
        basicSalary: selectedEmployee?.basicSalary,
        transportationAllowance: selectedEmployee?.transportationAllowance,
        mealAllowance: selectedEmployee?.mealAllowance,
        responsibilityAllowance: selectedEmployee?.responsibilityAllowance,
        paymentDate: (selectedEmployee?.hireDate || "").includes("25")
          ? "25일"
          : "10일",
      });
      console.log("급여정보", res);
    } catch (e) {
      console.error(e);
    }
  };

  const getRegisterEmployees = useCallback(async () => {
    const token = localStorage.getItem("accessToken");
    const res = await baseApi.get("/api/v1/payroll/register/employees", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        name,
        departmentName,
      },
    });

    if (res?.data?.data?.length === 0) {
      setSelectedEmployee(null);
    }

    setEmployeeList(res?.data?.data || []);
  }, [departmentName, name]);

  useEffect(() => {
    if (!open) return;

    let isMounted = true;

    const loadEmployees = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const res = await baseApi.get("/api/v1/payroll/register/employees", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            name,
            departmentName,
          },
        });

        if (!isMounted) return;

        if (res?.data?.data?.length === 0) {
          setSelectedEmployee(null);
        }

        setEmployeeList(res?.data?.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    void loadEmployees();

    return () => {
      isMounted = false;
    };
  }, [open, departmentName, name]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex w-[760px] min-w-[720px] max-h-[700px] flex-col overflow-hidden rounded-[16px] border-0 p-0">
        <DialogHeader className="rounded-t-[16px] bg-[#1B3A6B] px-[24px] py-[14px]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-[12px]">
              <div className="rounded-[8px] bg-[#fff]/[0.1255] p-[9px]">
                <UserRoundPlus size={18} color="#fff" />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-[700] text-[#fff]">
                  급여정보 등록
                </span>
                <span className="text-[11px] text-[#93C5FD]">
                  신규입사자의 급여 정보를 입력하세요
                </span>
              </div>
            </div>

            <div>
              <ul className="flex flex-wrap items-center gap-[6px] px-[20px]">
                <li className="flex items-center gap-[6px] rounded-[999px] bg-[#fff]/[0.1255] px-[12px] py-[7px] text-[11px] font-[700] text-[#FFFFFF]">
                  <span className="rounded-[999px] bg-[#fff] px-[8px] py-[3px] text-[10px] text-[#1B3A6B]">
                    1
                  </span>
                  <span>사원선택</span>
                </li>

                <ChevronRight size={12} color="#FFFFFF" />

                <li className="flex items-center gap-[6px] rounded-[999px] bg-[#fff]/[0.1255] px-[12px] py-[7px] text-[11px] font-[700] text-[#FFFFFF]">
                  <span className="rounded-[999px] bg-[#fff] px-[8px] py-[3px] text-[10px] text-[#1B3A6B]">
                    2
                  </span>
                  <span>급여입력</span>
                </li>
              </ul>
            </div>
          </div>
        </DialogHeader>

        <div className="max-h-[80vh] overflow-y-auto px-[24px] py-[24px]">
          <SearchEmployeeSection
            departmentName={departmentName}
            setDepartmentName={setDepartmentName}
            name={name}
            setName={setName}
            getRegisterEmployees={getRegisterEmployees}
            employeeList={employeeList}
            selectedEmployee={selectedEmployee}
            setSelectedEmployee={setSelectedEmployee}
          />

          <Divider />

          <SalaryFormSection
            selectedEmployee={selectedEmployee}
            setSelectedEmployee={setSelectedEmployee}
          />
        </div>

        <DialogFooter className="flex flex-col gap-3 border-t border-[#E5E7EB] bg-white px-[44px] py-[30px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-[6px]">
            <Info size={10} color="#9CA3AF" />
            <span className="text-[12px] leading-[14.4px] text-[#9CA3AF]">
              등록 완료 후 급여 대장에 자동 반영됩니다
            </span>
          </div>

          <div className="flex flex-wrap justify-end gap-[10px]">
            <button className="flex items-center gap-[6px] rounded-[10px] border border-[#D1D5DB] bg-white px-[12px] py-[8px] text-[13px] font-semibold text-[#374151]">
              <XIcon size={13} color="#6B7280" />
              취소
            </button>

            {/* 4대보험 취득/상실 내역 이면 안보여줌 */}
            {!bhcdss && (
              <button className="flex items-center gap-[6px] rounded-[10px] border border-[#D1D5DB] bg-white px-[12px] py-[8px] text-[13px] font-semibold text-[#374151]">
                <RotateCw size={13} color="#6B7280" />
                초기화
              </button>
            )}

            <button
              className="flex items-center gap-[6px] rounded-[10px] bg-[#2563EB] px-[12px] py-[8px] text-[13px] font-semibold text-white"
              onClick={registerEmployeeSalary}
            >
              <UserRoundPlus size={13} color="#FFFFFF" />
              급여정보등록
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function SearchEmployeeSection({
  setDepartmentName,
  setName,
  name,
  departmentName,
  getRegisterEmployees,
  employeeList = [],
  selectedEmployee,
  setSelectedEmployee,
}) {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 pl-[8px]">
          <span className="h-[16px] w-[3px] rounded-[8px] bg-[#1B3A6B]" />
          <span className="text-[14px] font-[700] text-[#1B3A6B]">
            신규입사자 검색
          </span>
        </div>
        <span className="flex w-fit items-center gap-[4px] rounded-[6px] bg-[#EFF6FF] px-[10px] py-[4px]">
          <UsersRound size={12} color="#2563EB" />
          <span className="text-[11px] font-[700] leading-[14.5px] text-[#2563EB]">
            검색결과 {employeeList.length}명
          </span>
        </span>
      </div>

      <div className="mt-[12px] grid w-full items-center gap-[8px] grid-cols-[170px_minmax(220px,1fr)_120px]">
        <select
          className="h-[44px] rounded-[12px] border border-[#D1D5DB] bg-white px-[12px] text-[13px] font-semibold text-[#111827]"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
        >
          <option value="">전체 부서</option>
          <option value="인사팀">인사팀</option>
          <option value="개발팀">개발팀</option>
          <option value="영업팀">영업팀</option>
        </select>

        <div className="relative min-w-0">
          <Search
            size={15}
            color="#2563EB"
            className="absolute left-[14px] top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getRegisterEmployees();
              }
            }}
            placeholder="사원명 검색"
            className="h-[44px] w-full rounded-[12px] border border-[#BFDBFE] bg-white pl-[38px] pr-[14px] text-[13px] text-[#111827] outline-none focus:border-[#2563EB]"
          />
        </div>

        <button
          onClick={() => getRegisterEmployees()}
          className="flex h-[44px] items-center gap-[6px] rounded-[12px] bg-[#2563EB] px-[14px] text-[13px] font-semibold text-white"
        >
          <Search size={15} color="#fff" />
          검색
        </button>
      </div>

      <div className="mt-[12px] min-h-[280px] overflow-hidden rounded-[10px] border border-[#E5E7EB] bg-white">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-[#F8FAFC] text-[#374151]">
            <tr className="text-left">
              <th className="w-[40px] px-[12px] py-[11px]">
                <input type="checkbox" className="h-4 w-4 accent-[#D1D5DB]" />
              </th>
              <th className="w-[100px] px-[10px] py-[11px]">사번</th>
              <th className="w-[190px] px-[10px] py-[11px]">사원명 · 부서</th>
              <th className="w-[80px] px-[10px] py-[11px]">직급</th>
              <th className="w-[100px] px-[10px] py-[11px]">입사일</th>
              <th className="w-[90px] px-[10px] py-[11px]">등록여부</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {employeeList.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-8 text-center text-[#6B7280]"
                >
                  사원이 없습니다.
                </td>
              </tr>
            )}
            {employeeList.map((item, idx) => {
              const isSelected =
                selectedEmployee?.employeeNo === item?.employeeNo;
              return (
                <tr
                  key={idx}
                  className={`border-t ${isSelected ? "bg-[#EFF6FF]" : "bg-white"}`}
                >
                  <td className="px-[12px] py-[11px]">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#2563EB]"
                      checked={isSelected}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedEmployee(item);
                        } else {
                          setSelectedEmployee(null);
                        }
                      }}
                    />
                  </td>
                  <td className="px-[10px] py-[11px] text-[13px] text-[#111827]">
                    {item?.employeeNo}
                  </td>
                  <td className="px-[10px] py-[11px]">
                    <div className="flex items-center gap-[8px]">
                      <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#DBEAFE] text-[11px] font-[700] text-[#2563EB]">
                        {item?.name?.[0] || "이"}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-[700] text-[#111827]">
                          {item?.name}
                        </span>
                        <span className="text-[11px] text-[#9CA3AF]">
                          {item?.departmentName}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-[10px] py-[11px] text-[13px] text-[#111827]">
                    {item?.positionName}
                  </td>
                  <td className="px-[10px] py-[11px] text-[13px] text-[#111827]">
                    {item?.hireDate}
                  </td>
                  <td className="px-[10px] py-[11px]">
                    {!item?.basicSalary ? (
                      <span className="rounded-[8px] bg-[#DCFCE7] px-[8px] py-[3px] text-[11px] font-[700] text-[#16A34A]">
                        미등록
                      </span>
                    ) : (
                      <span className="rounded-[8px] bg-[#FEF9C3] px-[8px] py-[3px] text-[11px] font-[700] text-[#CA8A04]">
                        등록완료
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="my-[20px] h-[1px] w-full rounded-[8px] bg-[#E5E7EB]" />
  );
}

function SalaryFormSection({ selectedEmployee, setSelectedEmployee }) {
  const deductionInfo = {
    국민연금: Math.floor(
      Number(
        selectedEmployee?.basicSalary ??
          0 + (selectedEmployee?.responsibilityAllowance ?? 0),
      ) * 0.045,
    ),
    건강보험: Math.floor(
      Number(
        selectedEmployee?.basicSalary +
          selectedEmployee?.responsibilityAllowance,
      ) * 0.03545,
    ),
    고용보험: Math.floor(
      Number(
        selectedEmployee?.basicSalary +
          selectedEmployee?.responsibilityAllowance,
      ) * 0.009,
    ),
    소득세: Math.floor(
      Number(
        selectedEmployee?.basicSalary +
          selectedEmployee?.responsibilityAllowance,
      ) * 0.003,
    ),
  };

  const totalDeductionAmount =
    deductionInfo?.국민연금 +
    deductionInfo?.건강보험 +
    deductionInfo?.고용보험 +
    deductionInfo?.소득세;

  const totalAmount =
    (selectedEmployee?.basicSalary ?? 0) +
    (selectedEmployee?.mealAllowance ?? 0) +
    (selectedEmployee?.transportationAllowance ?? 0) +
    (selectedEmployee?.responsibilityAllowance ?? 0);

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-2 text-[14px] text-[#1B3A6B]">
        <div className="flex items-center gap-2 pl-[8px]">
          <span className="h-[16px] w-[3px] rounded-[8px] bg-[#1B3A6B]" />
          <span className="text-[14px] font-[700] text-[#1B3A6B]">
            급여 정보 입력
          </span>
        </div>

        {selectedEmployee?.name && (
          <span className="flex w-fit items-center gap-[4px] rounded-[6px] bg-[#DBEAFE] px-[12px] py-[5px]">
            <span className="rounded-[999px] bg-[#2563EB] px-[5px] py-[3px] text-[9px] font-[700] text-[#fff]">
              이
            </span>
            <span className="flex items-center gap-[8px] text-[11px] font-[700] leading-[14.5px] text-[#2563EB]">
              <span className="text-[12px] font-[700]">
                {selectedEmployee?.name} · {selectedEmployee?.departmentName} ·{" "}
                {selectedEmployee?.positionName}
              </span>
              <span className="rounded-[999px] border-[1.5px] border-[#2563EB]">
                <Check size={10} color="#2563EB" />
              </span>
            </span>
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-[12px] pt-[14px] sm:grid-cols-2 lg:grid-cols-3">
        <SalaryInput
          title="기본급"
          impt
          unit="원"
          onChange={(e) => {
            setSelectedEmployee((prev) => ({
              ...prev,
              basicSalary: Number(e.target.value.replace(/\D/g, "")),
            }));
          }}
          value={Number(selectedEmployee?.basicSalary ?? 0).toLocaleString()}
        />
        <SalaryInput
          title="직급수당"
          impt
          unit="원"
          onChange={(e) => {
            setSelectedEmployee((prev) => ({
              ...prev,
              responsibilityAllowance: Number(
                e.target.value.replace(/\D/g, ""),
              ),
            }));
          }}
          value={Number(
            selectedEmployee?.responsibilityAllowance ?? 0,
          ).toLocaleString()}
        />
        <SalaryInput
          title="식대"
          unit="원"
          onChange={(e) => {
            setSelectedEmployee((prev) => ({
              ...prev,
              mealAllowance: Number(e.target.value.replace(/\D/g, "")),
            }));
          }}
          value={Number(selectedEmployee?.mealAllowance ?? 0).toLocaleString()}
        />
        <SalaryInput
          title="교통비"
          unit="원"
          onChange={(e) => {
            setSelectedEmployee((prev) => ({
              ...prev,
              transportationAllowance: Number(
                e.target.value.replace(/\D/g, ""),
              ),
            }));
          }}
          value={Number(
            selectedEmployee?.transportationAllowance ?? 0,
          ).toLocaleString()}
        />
        <SalarySelect title="지급방식" impt optionList={["계좌이체", "현금"]} />
        <SalarySelect
          title="급여지급일"
          impt
          optionList={["25일", "10일"]}
          value={
            (selectedEmployee?.hireDate || "").includes("25") ? "25일" : "10일"
          }
          onChange={(e) => {
            setSelectedEmployee((prev) => ({
              ...prev,
              hireDate: e.target.value,
            }));
          }}
        />
      </div>

      <DeductionSection deductionInfo={deductionInfo} />
      <MandatoryDeduction
        totalAmount={totalAmount}
        totalDeductionAmount={totalDeductionAmount}
      />
    </section>
  );
}

function SalaryInput({ title, impt, unit, value, onChange }) {
  return (
    <div className="relative flex w-full flex-col md:w-[202px]">
      <label className="text-[12px] font-bold text-[#374151]">
        {title}
        {impt && <span className="text-[12px] text-[#EF4444]">*</span>}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange?.(e);
        }}
        className="w-full rounded-[13px] border border-[#D1D5DB] py-[11px] pl-[12px] pr-[36px] text-[13px] font-bold leading-[15.6px] text-[#111827] outline-none focus:border-[#2563EB]"
      />
      {unit && (
        <span className="absolute right-[12px] top-[65%] -translate-y-1/2 text-[12px] font-semibold text-[#6B7280]">
          {unit}
        </span>
      )}
    </div>
  );
}

function SalarySelect({ optionList = [], onChange, impt, title, value }) {
  return (
    <div className="relative flex w-full flex-col md:w-[202px]">
      <label className="text-[12px] font-bold text-[#374151]">
        {title}
        {impt && <span className="text-[12px] text-[#EF4444]">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange?.(e)}
        className="w-full rounded-[13px] border border-[#D1D5DB] px-[12px] py-[11px] text-[13px] font-bold text-[#111827] outline-none focus:border-[#2563EB]"
      >
        {optionList.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

function DeductionSection({ deductionInfo }) {
  return (
    <div className="mt-[10px] rounded-[10px] border border-[#E5E7EB] bg-[#F8FAFC] p-[14px]">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-[6px]">
          <Calculator size={13} color="#6B7280" />
          <span className="text-[13px] leading-[15.6px] text-[#374151]">
            공제 항목 (자동 계산)
          </span>
        </div>
        <span className="flex w-fit items-center gap-[4px] rounded-[6px] bg-[#E0E7FF] px-[10px] py-[3px] text-[11px] font-bold leading-[13.2px] text-[#4F46E5]">
          <Zap size={13} color="#4F46E5" />
          급여 기준 자동 산정
        </span>
      </div>

      <div className="mt-[10px] flex flex-wrap gap-[10px]">
        <DeductionItem
          title="국민연금 (4.6%)"
          amount={deductionInfo?.국민연금 ?? 0}
        />
        <DeductionItem
          title="건강보험 (3.545%)"
          amount={deductionInfo?.건강보험 ?? 0}
        />
        <DeductionItem
          title="고용보험 (0.9%)"
          amount={deductionInfo?.고용보험 ?? 0}
        />
        <DeductionItem
          title="소득세 (간이세액)"
          amount={deductionInfo?.소득세 ?? 0}
        />
      </div>
    </div>
  );
}

function DeductionItem({ title, amount }) {
  return (
    <div className="flex flex-col w-fit">
      <label className="text-[11px] font-bold leading-[13.2px] text-[#6B7280]">
        {title}
      </label>
      <div className="relative pt-[5px]">
        <input
          type="text"
          disabled
          readOnly
          className="w-[143px] rounded-[8px] border border-[#E0E7FF] bg-white pl-[10px] pr-[20px] pb-[10px] pt-[10px] text-[12px] leading-[14.4px] text-[#6B7280]"
          value={Number(amount ?? 0).toLocaleString()}
        />
        <span className="absolute right-[10px] top-[15px] rounded-[4px] bg-[#E0E7FF] px-[6px] py-[2px] text-[10px] font-bold leading-[12px] text-[#4F46E5]">
          자동
        </span>
      </div>
    </div>
  );
}

function MandatoryDeduction({ totalAmount, totalDeductionAmount }) {
  return (
    <div className="mt-[14px] flex flex-col gap-3 rounded-[10px] border border-[#BFDBFE] bg-[#EFF6FF] px-[16px] py-[14px] lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-[19px]">
        <div className="flex flex-col justify-center gap-[3px]">
          <span className="text-[11px] leading-[13.2px] text-[#64748B]">
            총 지급액
          </span>
          <span className="text-[15px] font-bold leading-[18px] text-[#1D4ED8]">
            {Number(totalAmount).toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-center">
          <span className="h-[1px] w-[10px] rounded-[10px] bg-[#BFDBFE]" />
        </div>

        <div className="flex flex-col items-center justify-center gap-[3px]">
          <span className="text-[11px] leading-[13.2px] text-[#64748B]">
            총 공제액
          </span>
          <span className="text-[15px] font-bold leading-[18px] text-[#374151]">
            {Number(totalDeductionAmount).toLocaleString()}원
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-[5px]">
          <span className="h-[1px] w-[10px] rounded-[10px] bg-[#BFDBFE]" />
          <span className="h-[1px] w-[10px] rounded-[10px] bg-[#BFDBFE]" />
        </div>

        <div className="flex flex-col items-center justify-center gap-[3px]">
          <span className="text-[11px] leading-[13.2px] text-[#64748B]">
            실 수령액
          </span>
          <span className="text-[17px] font-bold leading-[20.4px] text-[#1B3A6B]">
            {Number(totalAmount - totalDeductionAmount).toLocaleString()}원
          </span>
        </div>
      </div>

      <div className="flex items-center gap-[4px]">
        <Info size={10} color="#93C5FD" />
        <span className="text-[11px] leading-[13.2px] text-[#64748B]">
          공제액은 자동 계산됩니다
        </span>
      </div>
    </div>
  );
}
