import viteLogo from "/usdt-logo.svg";
import reactLogo from "/bitcoin-cash-bch-logo.svg";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Progress } from "@/components/ui/progress";

function App() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-[#6D7A86]">
              Go Back
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/orders" className="text-[#6D7A86]">
              Orders
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>0xb10455fed0a9f4c782af</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="border rounded mt-6 p-4 border-neutral-900">
        <div className="flex gap-2 items-center mb-4">
          <span>Status:</span>
          <span>Fulfilled</span>
        </div>

        <Progress value={100} className="bg-[#2DD4BF]" />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <div className="border p-4 rounded border-neutral-900 flex-1">
          <div className="mb-2 flex items-center justify-between">
            <span>From</span>
            <span className="text-[#6D7A86]">16.979584 USDT</span>
          </div>
          <div className="bg-[#04131F] rounded p-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={viteLogo} alt="" />
              <span>USDT</span>
            </div>
            <span>7.054632</span>
          </div>
        </div>
        <div className="border p-4 rounded border-neutral-900 flex-1">
          <div className="mb-2 flex items-center justify-between">
            <span>To</span>
            <span className="text-[#6D7A86]">16.979584 BCH</span>
          </div>
          <div className="bg-[#04131F] rounded p-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={reactLogo} alt="" />
              <span>BCH</span>
            </div>
            <span>4,000.13</span>
          </div>
        </div>
      </div>

      <div className="border rounded mt-6 p-4 border-neutral-900 flex flex-col sm:flex-row justify-between sm:items-center">
        <div className="flex gap-2 items-center">
          <span className="text-[#6D7A86]">Price:</span>
          <span className="shrink-0">0.0018 BCH</span>
          <span className="text-[#33ED8D]">Market</span>
        </div>
        <hr className="sm:hidden border border-neutral-900 my-4" />
        <div className="flex gap-2 items-center">
          <span className="text-[#6D7A86] shrink-0">Order ID:</span>
          <span>0xb10455fed0a9f4c782af</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <div className="border p-4 rounded border-neutral-900 flex-1"></div>
        <div className="border p-4 rounded border-neutral-900 flex-1"></div>
      </div>
    </>
  );
}

export default App;
