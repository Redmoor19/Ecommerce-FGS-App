import { CreateUpdateReview } from "@/types/review"
import { useForm } from "react-hook-form"
import { z } from "zod"
import StarRating from "./StarRating"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type CreateReviewFormProps = {
  submitHandler: (data: CreateUpdateReview) => void
  className?: string
  disabled: boolean
}

const reviewSchema: z.ZodType<CreateUpdateReview> = z.object({
  description: z.string().trim().min(1, "Leave some message"),
  starRating: z.number()
})

const CreateReviewForm = ({ submitHandler, className, disabled }: CreateReviewFormProps) => {
  const reviewForm = useForm<z.infer<typeof reviewSchema>>({
    defaultValues: {
      description: "",
      starRating: 3
    }
  })

  function onSubmit(values: z.infer<typeof reviewSchema>) {
    submitHandler(values)
    reviewForm.reset()
  }

  return (
    <Form {...reviewForm}>
      <form
        onSubmit={reviewForm.handleSubmit(onSubmit)}
        className={`flex flex-col gap-5 ${className}`}
      >
        <FormField
          control={reviewForm.control}
          name="starRating"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <StarRating readonly={disabled} value={field.value} setValue={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={reviewForm.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  disabled={disabled}
                  placeholder={"Leave us a feedback on this game"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button disabled={disabled} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default CreateReviewForm
