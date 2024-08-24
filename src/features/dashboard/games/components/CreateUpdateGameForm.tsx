import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CreateGame, Game } from "@/types/game"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
import { z } from "zod"
import CustomSelector from "./CustomSelector"
import { Button } from "@/components/ui/button"
import { isImageUrl } from "@/lib/isImageUrl"

const gameSchema: z.ZodType<CreateGame> = z.object({
  name: z
    .string()
    .min(1, "Name can't be less, then 1 character")
    .max(30, "That is way to long for a name")
    .trim(),
  genreList: z.array(z.string()).min(1, "Should be at leat 1 genre"),
  playerSupport: z.array(z.string()).min(1, "Should be at leat 1 player support"),
  description: z
    .string()
    .min(1, "Please provide the description")
    .max(200, "This is to much for description")
    .trim(),
  quantity: z.number(),
  thumbnail: z.string(),
  images: z.array(z.string()).min(1),
  releaseDate: z.date(),
  systemRequirements: z.string().min(1),
  price: z.number().positive(),
  developer: z.string().min(1)
})

type CreateUpdateGameFormProps = {
  game?: Game
  allGenres: string[]
  allPS: string[]
}

const CreateUpdateGameForm = ({ game, allGenres = [], allPS = [] }: CreateUpdateGameFormProps) => {
  const gameForm = useForm<z.infer<typeof gameSchema>>({
    resolver: zodResolver(gameSchema),
    defaultValues: game?.id
      ? { ...game, releaseDate: new Date(game.releaseDate) }
      : {
          name: "",
          description: "",
          developer: "",
          genreList: [],
          images: [""],
          playerSupport: [],
          price: 0,
          quantity: 0,
          releaseDate: new Date(),
          systemRequirements: "",
          thumbnail: ""
        }
  })

  const { fields, append, remove } = useFieldArray<CreateGame>({
    control: gameForm.control,
    name: "images" as never
  })

  function onSubmit(values: z.infer<typeof gameSchema>) {
    console.log(values)
  }

  return (
    <Form {...gameForm}>
      <form onSubmit={gameForm.handleSubmit(onSubmit)} className="space-y-3 p-3">
        <FormField
          control={gameForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Game title</FormLabel>
              <FormControl>
                <Input placeholder="Minecraft" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={gameForm.control}
          name="developer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Developer</FormLabel>
              <FormControl>
                <Input placeholder="Mojang" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={gameForm.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="A long time ago in a galaxy far, far away.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={gameForm.control}
          name="releaseDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Release date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : null)}
                  value={
                    field.value instanceof Date
                      ? field.value.toISOString().split("T")[0]
                      : field.value || ""
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={gameForm.control}
          name="systemRequirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Requirements</FormLabel>
              <FormControl>
                <Input
                  placeholder="OS: Windows 11, CPU: Intel i7, RAM: 16GB, GPU: NVIDIA RTX 3080"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={gameForm.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price in €</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="20"
                  {...field}
                  onChange={(e) => field.onChange(+e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-start items-center gap-7">
          <FormField
            control={gameForm.control}
            name="genreList"
            render={({ field }) => (
              <FormItem>
                <CustomSelector
                  placeholder="Genres"
                  value={field.value}
                  setValue={field.onChange}
                  items={allGenres}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={gameForm.control}
            name="playerSupport"
            render={({ field }) => (
              <FormItem>
                <CustomSelector
                  placeholder="Player Support"
                  value={field.value}
                  setValue={field.onChange}
                  items={allPS}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={gameForm.control}
          name="quantity"
          defaultValue={game?.quantity || 0}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} value={game?.quantity || 0} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center items-center">
          {isImageUrl(gameForm.getValues().thumbnail) && (
            <figure>
              <img
                className="max-h-48 w-auto"
                src={gameForm.getValues().thumbnail}
                alt="thumbnail preview"
              />
              <figcaption className="text-muted-foreground">Thumbnail preview</figcaption>
            </figure>
          )}
        </div>
        <FormField
          control={gameForm.control}
          name="thumbnail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail</FormLabel>
              <FormControl>
                <Input placeholder="Paste a link here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-start items-center gap-3 overflow-x-auto">
          {gameForm
            .getValues()
            .images.map(
              (image, i) =>
                isImageUrl(image) && (
                  <img
                    className="max-h-40"
                    key={image}
                    src={image}
                    alt={`Preview for ${i + 1} image`}
                  />
                )
            )}
        </div>
        <FormItem className="flex flex-col">
          <FormLabel>Images</FormLabel>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center space-x-2">
              <FormControl>
                <Input
                  placeholder={`Image URL #${index + 1}`}
                  {...gameForm.register(`images.${index}`)}
                />
              </FormControl>
              <Button type="button" onClick={() => remove(index)} variant="outline">
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => append("")} variant="outline">
            Add Image
          </Button>
          <FormMessage />
        </FormItem>
        <Button type="submit">Create</Button>
      </form>
    </Form>
  )
}

export default CreateUpdateGameForm
