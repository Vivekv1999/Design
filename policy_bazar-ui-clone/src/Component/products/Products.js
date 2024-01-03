import React from "react";

const productsDetail = [
  {
    title: "term life insurance",
    discountTitle: "Upto 30% Discount",
    discountTitleColor: "bg-green-300",
    productImage: "",
  },
  {
    title: "Health insurance",
    discountTitle: "Upto 25% Discount",
    discountTitleColor: "bg-green-300",
    productImage: "",
  },
  {
    title: "Investement Plans",
    discountTitle: "New Fund Launch",
    discountTitleColor: "bg-green-300",
    productImage: "",
  },
  {
    title: "Car insurance",
    discountTitle: "",
    discountTitleColor: "",
    productImage: "",
  },
  {
    title: "2 Wheeler insurance",
    discountTitle: "",
    discountTitleColor: "",
    productImage: "",
  },
  {
    title: "Family Health insurance",
    discountTitle: "Upto 25% Discount",
    discountTitleColor: "bg-green-300",
    productImage: "",
  },
  {
    title: "Travel insurance",
    discountTitle: "Free Bag Tracking",
    discountTitleColor: "bg-green-300",
    productImage: "",
  },
  {
    title: "Term insurance (Women)",
    discountTitle: "Upto 30% cheaper",
    discountTitleColor: "bg-green-300",
    productImage: "",
  },
  {
    title: "Fre of Cost Term plan",
    discountTitle: "",
    discountTitleColor: "",
    productImage: "",
  },
  {
    title: "Guaranted Return Plans",
    discountTitle: "",
    discountTitleColor: "",
    productImage: "",
  },
  {
    title: "Child Savings Plans",
    discountTitle: "Premium Waiver",
    discountTitleColor: "bg-red-500",
    productImage: "",
  },
  {
    title: "Retirement Plans",
    discountTitle: "",
    discountTitleColor: "",
    productImage: "",
  },
  {
    title: "Employee Group Health Insurance",
    discountTitle: "",
    discountTitleColor: "bg-green-300",
    productImage: "",
  },
  {
    title: "Home Insurance",
    discountTitle: "",
    discountTitleColor: "bg-green-300",
    productImage: "",
  },
];

const Products = () => {
  return (
    <>
      <div className="app_main_wrapper p-4">
        <div className="flex flex-col px-40 items-center">
          <div className=" flex justify-between  align-middle flex-wrap gap-6">
          {productsDetail.map((item) => {
            return (
              <>
                <div className="flex flex-col w-32">
                  <div className="w-32 h-20 bg-green-100 rounded-xl">
                    {item?.discountTitle && (
                      <div
                        className={`self-center h-4 text-black text-[10px] text-center rounded-t-xl ${item.discountTitleColor}`}
                        style={{color:item?.discountTitle==="Premium Waiver"?"white":"black"}}
                      >
                        {item?.discountTitle}
                      </div>
                    )}
                    <div>
                      {/* <img
                        src={item.productImage}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
                  </div>
                  <div className="text-[13px] text-center capitalize">
                    {item.title}
                  </div>
                </div>
              </>
            );
          })}
          </div>

          <button 
          className="border-solid border-2 mt-3 border-blue-500	w-32 place-content-center 
           rounded-2xl text-[12px] p-1 px-3 py-2 font-medium text-blue-500"
          >
            View all products</button>
        </div>
      </div>
    </>
  );
};

export default Products;
