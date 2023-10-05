import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const Section = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-12 px-[59px]">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[20px] font-bold font-[Inter,sans-serif]">
          {data?.title}
        </h3>
        <span className="text-xs font-[500] text-[#696969] uppercase">
          tat ca
        </span>
      </div>
      <div className="flex items-center justify-between gap-7">
        {data.items &&
          data?.items?.length > 0 &&
          data.items
            .filter((item, index) => index <= 4)
            ?.map((item) => (
              <div
                onClick={() => {
                  navigate(item?.link?.split(".")[0]);
                }}
                key={item.encodeId}
                className="flex flex-col gap-2 flex-auto w-1/5 text-sm"
              >
                <img
                  src={item.thumbnailM}
                  alt="avatar"
                  className="w-full h-auto rounded-lg cursor-pointer"
                />
                {data?.sectionId === "h100" ? (
                  <span className="text-xstext-sm font-bold">
                    {item.title?.length >= 30
                      ? `${item.title?.slice(0, 20)}...`
                      : item.title}
                  </span>
                ) : (
                  <span className="text-sm font-normal text-[#696969] font-[Inter,sans-serif]">
                    {item.sortDescription?.length >= 40
                      ? `${item.sortDescription?.slice(0, 40)}...`
                      : item.sortDescription}
                  </span>
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default memo(Section);
