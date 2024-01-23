import React from "react";
import SendIcon from "@mui/icons-material/Send";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const ContanctCard=({title,contaDetail,icon})=>{
return  <div className="border-2 items-center gap-4 px-9 border-indigo-300 rounded-md flex p-4 mt-6">
{icon}
<div>
<span className="text-zinc-500">{title}</span><br/>
<span className="font-semibold text-blue-900">{contaDetail}</span>
</div>
</div>
}

const QuestionHelp = () => {
  return (
    <div className="app_main_wrapper app_sliderImage p-4">
      <div className="px-40  ">
          <div className="w-68 text-[30px] font-semibold">
            Have a question?
            <br /> Here to help.
            <div className="h-[5px] w-16 my-5 bg-blue-800"></div>
          </div>
          <div className="flex">
        <div className="w-2/3">
          <div className="w-80 mt-8 text-zinc-800">
            <div>
              Our friendly customer support team is your extended family. Speak
              your heart out. They listen with undivided attention to resolve
              your concerns. Give us a call, request a callback or drop us an
              email, we’re here to help.
            </div>
            <ContanctCard
            icon={<SendIcon className="text-blue-900"/>}
            contaDetail={"Care@policyBazar.com"}
            title={"General Enquiries"}
            />
            <ContanctCard
            icon={<SupportAgentIcon className="text-blue-900"/>}
            contaDetail={"1800 - 208 - 8787"}
            title={"Cuatomer Sales Enquiries"}
            />
           
            <div></div>
          </div>
        </div>
        <div className="flex content-end">
          <img src="assets/QuestionHelp/help.png" alt="loading..." className="flex self-end" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionHelp;
