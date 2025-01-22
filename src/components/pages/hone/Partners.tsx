import React, { useEffect } from "react";
import { useFetchPartners } from "../../../app/hooks/partners";
import { PartnerType } from "../../../app/types/shared";
import { Link } from "react-router-dom";

function Partners() {
  const {loading, fetchPartners,partners } = useFetchPartners();

  useEffect(() => {
    fetchPartners();
  }, []);


  return (
    <>
      <div className="px-4 bg-gray-100 py-12">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full  py-12 lg:px-10  md:px-6 px-4  mx-auto">
          <div className="flex flex-col lg:justify-between lg:flex-row gap-x-8 gap-y-8">
            <div aria-label="text-area" className="mb-7">
              <p className="lg:text-4xl text-3xl font-semibold leading-10 text-blue-800 mb-4 lg:max-w-[405px] w-full">
                Our Best Affiliated Agencies
              </p>
              <p className="text-base leading-normal text-gray-800 mb-[64px] lg:max-w-[513px] w-full">
                We are confident that we can find the process that will help you
                meet your goals.
              </p>
             
            </div>

            {/* Partners logos and descriptions */}
            <div className="lg:block md:block">
              <div className="flex flex-col xl:min-w-[624px] w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {partners.map((partner:PartnerType) => (
                    <div key={partner.id} className="flex flex-col items-center">
                      <img src={partner.logo} alt={`${partner.name} Logo`} className="h-16 mb-4" />
                      <p className=" font-semibold text-gray-800">{partner.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
