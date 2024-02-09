import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/dashboardstate";

export default function DeviceTable() {
  const deviceDetail = useSelector((state: RootState) => state.deviceDetail);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(deviceDetail.devices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDevices = deviceDetail.devices.slice(startIndex, endIndex);
  console.log(deviceDetail);

  return (
    <div className="flex flex-col items-stretch">
      {/* 테이블 */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center text-gray-500 truncate">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-3">
                분류
              </th>
              <th scope="col" className="px-3">
                등록명
              </th>
              <th scope="col" className="px-6">
                등록일자
              </th>
              <th scope="col" className="px-6">
                상태
              </th>
            </tr>
          </thead>
          <tbody>
            {currentDevices.map((device) => (
              <tr key={device.id} className="bg-white border-b text-center">
                <th
                  scope="row"
                  className=" font-medium text-gray-900 whitespace-nowrap py-4"
                >
                  {device.category}
                </th>
                <td>{device.name}</td>
                <td>{device.date}</td>
                <td>
                  <span
                    className={`${device.status ? "bg-blue-500 text-white" : "bg-red-300 text-white"} line-block py-1 px-2 rounded-full`}
                  >
                    {device.status ? "활성화" : "비활성화"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <nav className="mt-5 self-end">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <button
                key={currentPage - 1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={() => {
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
              >
                {"<"}
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li>
                <button
                  key={page}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                key={currentPage + 1}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={() => {
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
              >
                {">"}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
