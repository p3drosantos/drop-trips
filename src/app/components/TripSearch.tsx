"use client";
import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

interface TripSearchForm {
  text: string;
  startDate: Date | null;
  budget: string;
}

const TripSearch = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TripSearchForm>();

  const onSubmit = (data: TripSearchForm) => {
    router.push(
      `/trips/search?text=${
        data.text
      }&startDate=${data.startDate?.toISOString()}&budget=${data.budget}`
    );
  };
  return (
    <div className="container mx-auto p-5 bg-search-backgorund bg-cover bg-center bg-no-repeat lg:py-20">
      <h1 className=" text-2xl font-semibold text-primaryDark text-center lg:text-[2.5rem]">
        Encontre sua próxima <span className=" text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:p-4 lg:bg-primary lg:mt-12 lg:bg-opacity-20 lg:rounded-lg ">
        <Input
          placeholder="Onde você quer ir?"
          error={!!errors.text}
          errorMessage={errors.text?.message}
          {...register("text", {
            required: { value: true, message: "Texto é obrigatório!" },
          })}
        />
        <div className="flex gap-4 lg:w-full">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText="Data final"
                onChange={field.onChange}
                selected={field.value}
                minDate={new Date()}
                className="w-full"
              />
            )}
          />
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <CurrencyInput
                placeholder="Orçamento"
                onValueChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                allowDecimals={false}
              />
            )}
          />
        </div>

        <div className="lg:w-[500px]">
          <Button
            onClick={() => handleSubmit(onSubmit)()}
            className=" lg:h-fit w-full"
          >
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TripSearch;
