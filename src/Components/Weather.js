import React from "react";

export default function Weather({ defaultData }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">
          Weather Details
        </h2>
        <p className="m-2">
          Please select desired city from table to see weather details
        </p>

        <div className=" gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8  ">
          {defaultData &&
            defaultData.map((city) => {
              if (city.enable) {
                return (
                  <div
                    class="max-w-sm rounded overflow-hidden shadow-lg bg-blue-800 border-1 border-blue-950  border-radius-50 m-3"
                    key={city.id}
                  >
                    <div class="pt-2">
                      <div
                        class="font-bold text-xl mb-2 center"
                        style={{
                          color: "white",
                          textAlign: "center",
                          fontSize: "14px"
                        }}
                      >
                        {city.cityName}, {city.stateName}, {city.Country}
                      </div>
                    </div>

                    <div
                      className="flex justify-evenly"
                      style={{ color: "white" }}
                    >
                      <div>
                        <img
                          src="https://weatherstack.com/site_images/weather_icon_cloud_slight_rain.svg"
                          alt="Sunset in the mountains"
                        />
                        <p className="pl-3">{city.cloudStatus}</p>
                      </div>
                      <p className="pt-5" style={{ color: "white" }}>
                        27 C
                      </p>
                      <div
                        class="pt-4"
                        style={{ fontSize: "12px", color: "white" }}
                      >
                        <p>Cloudstatus : {city.cloudStatus}</p>
                        <p>Pressure : {city.pressure}</p>
                        <p>WindSpeed : {city.windSpeed}</p>
                      </div>
                    </div>

                    <div
                      class="flex justify-evenly pt-5 pb-3"
                      style={{ color: "white", fontSize: "12px" }}
                    >
                      <div>
                        THU
                        <img
                          className="w-10 pr-2"
                          src="https://weatherstack.com/site_images/weather_icon_cloud_slight_rain.svg"
                          alt="Sunset in the mountains"
                        />
                      </div>
                      <div>
                        FRI
                        <img
                          className="w-10 pr-2"
                          src="https://weatherstack.com/site_images/weather_icon_cloud_slight_rain.svg"
                          alt="Sunset in the mountains"
                        />
                      </div>
                      <div>
                        SAT
                        <img
                          className="w-10 pr-2"
                          src="https://weatherstack.com/site_images/weather_icon_cloud_slight_rain.svg"
                          alt="Sunset in the mountains"
                        />
                      </div>
                      <div>
                        SUN
                        <img
                          className="w-10 pr-2"
                          src="https://weatherstack.com/site_images/weather_icon_cloud_slight_rain.svg"
                          alt="Sunset in the mountains"
                        />
                      </div>
                      <div>
                        MON
                        <img
                          className="w-10 pr-2"
                          src="https://weatherstack.com/site_images/weather_icon_cloud_slight_rain.svg"
                          alt="Sunset in the mountains"
                        />
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </div>
  );
}
