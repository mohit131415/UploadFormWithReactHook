import { useForm } from "react-hook-form";

const NameOptions ={
  required:"Name is Required",
  minLength:{
    value:3,
    message:"Name Must be atleast 3 characters",
  },
  maxLength:{
    value:25,
    message:"Name can only exceed upto 25 characters",
  },
}

const MenuOptions ={
  required:"Menu is Required",
  minLength:{
    value:12,
    message:"Name Must be atleast 12 characters",
  },
  maxLength:{
    value:100,
    message:"Name can only exceed upto 100 characters",
  },
}

const ProgrammeOptions ={
  required:"Programme is Required",
  minLength:{
    value:12,
    message:"Name Must be atleast 12 characters",
  },
  maxLength:{
    value:100,
    message:"Name can only exceed upto 100 characters",
  },
}

const startTimeOptions ={
  required:"Start Time is Required",
}

const EndTimeOptions ={
  required:"End Time is Required",
}

const GuestsCountOptions ={
  required:"Guests Count is Required",
}

const TablesCountOptions ={
  required:"Tables Count is Required",
}

const DateOptions ={
  required:"Date is Required",
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    // const {
    //   Name,
    //   Date,
    //   startTime,
    //   endTime,
    //   GuestsCount,
    //   TablesCount,
    //   MenuOptions,
    //   Programme,
    // } = data;
    // console.log("Name :" + Name);
    // console.log("Date :" + Date);
    // console.log("startTime :" + startTime);
    // console.log("endTime :" + endTime);
    // console.log("GuestsTime :" + GuestsCount);
    // console.log("TablesCount :" + TablesCount);
    // console.log("MenuOptions :" + MenuOptions);
    // console.log("Proggramme :" + Programme);
    console.log(data);
  };

  const errorCount = Object.keys(errors).length;

  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center flex-col container">
      <div>
        <h1 className={`text-3xl flex justify-center pb-3 ${errorCount>3 ? "!mt-[5.75rem]" : "" }`}>
          Event Details Upload
        </h1>
      </div>
      <div className="bg-white flex w-[400px] p-3  items-center shadow-lg rounded-lg">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col gap-3 w-full"
        >
          <div className="flex flex-col">
            <label>Name</label>
            <input
              {...register("Name",NameOptions)}
              type="text"
              className="shared-styles"
            />
            {errors.Name && (
              <p className="text-red-500 text-sm">{errors.Name.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label>Date</label>
            <input
              {...register("Date",DateOptions)}
              type="Date"
              className="shared-styles"
            />
            {errors.Date && (
              <p className="text-red-500 text-sm">{errors.Date.message}</p>
            )}
          </div>
          <div className="flex flex-row gap-3 w-full justify-between">
            <div className="flex flex-col w-1/2">
              <label>Start Time</label>
              <input
                {...register("startTime",startTimeOptions)}
                type="time"
                className="shared-styles"
              />
              {errors.startTime && (
              <p className="text-red-500 text-sm">{errors.startTime.message}</p>
            )}
            </div>
            <div className="flex flex-col w-1/2">
              <label>End Time</label>
              <input
                {...register("endTime",EndTimeOptions)}
                type="time"
                className="shared-styles"
              />
              {errors.endTime && (
              <p className="text-red-500 text-sm">{errors.endTime.message}</p>
            )}
            </div>
          </div>
          <div className="flex flex-row gap-3 w-full justify-between">
            <div className="flex flex-col w-1/2">
              <label>Guests Count</label>
              <input
                {...register("GuestsCount",GuestsCountOptions)}
                type="number"
                className="shared-styles"
              />
              {errors.GuestsCount && (
              <p className="text-red-500 text-sm">{errors.GuestsCount.message}</p>
            )}
            </div>
            <div className="flex flex-col w-1/2">
              <label>Tables Count</label>
              <input
                {...register("TablesCount",TablesCountOptions)}
                type="Number"
                className="shared-styles"
              />
              {errors.TablesCount && (
              <p className="text-red-500 text-sm">{errors.TablesCount.message}</p>
            )}
            </div>
          </div>
          <div className="flex flex-col">
            <label>Menu Options</label>
            <textarea
              {...register("MenuOptions",MenuOptions)}
              className="shared-styles h-24"
            ></textarea>
            {errors.MenuOptions && (
              <p className="text-red-500 text-sm">{errors.MenuOptions.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label>Programme</label>
            <textarea
              {...register("Programme",ProgrammeOptions)}
              className="shared-styles h-24"
            ></textarea>
            {
              errors.Programme && (
                <p className="text-red-500 text-sm">{errors.Programme.message}</p>
              )
            }
          </div>
          <div className="pt-1">
            <button className="border-2 border-blue-400 p-2 w-full rounded-md text-xl text-blue-500 hover:bg-blue-100">
              Add Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
