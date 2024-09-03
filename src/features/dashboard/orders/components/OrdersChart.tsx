import sortObject from "@/lib/sortObject"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"

import { Bar, BarChart, Label, Pie, PieChart, XAxis, YAxis } from "recharts"

type OrdersChartProps = {
  stats: { [key: string]: number }
  orders: { [key: string]: number }
  totalSum: number
}

const OrdersChart = ({ stats, orders, totalSum }: OrdersChartProps) => {
  function normalizeTitle(title: string) {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/:/g, "")
  }

  const totalOrders = Object.entries(orders).reduce((sum, acc) => sum + acc[1], 0)

  const totalOrdersData = [
    {
      title: "Unpaid",
      quantity: orders.unpaid,
      fill: "var(--color-unpaid)"
    },
    {
      title: "Waiting",
      quantity: orders.waiting,
      fill: "var(--color-waiting)"
    },
    {
      title: "Paid",
      quantity: orders.paid,
      fill: "var(--color-paid)"
    },
    {
      title: "Rejected",
      quantity: orders.rejected,
      fill: "var(--color-rejected)"
    }
  ]

  const top5Data = [
    ...sortObject(stats)
      .slice(0, 5)
      .map((item) => {
        const normalizedKey = normalizeTitle(item.title)
        return {
          ...item,
          fill: `var(--color-${normalizedKey})`
        }
      })
  ]

  function transformArrayToChartConfig(
    array: {
      [key: string]: string | number
    }[]
  ) {
    const config: { [key: string]: unknown } = {}

    function getChartNumber(index: number) {
      return index + 1
    }

    array.forEach((item, index) => {
      const key = normalizeTitle(typeof item.title === "string" ? item.title : "")
      config[key] = {
        label: item.title,
        color: `hsl(var(--chart-${getChartNumber(index)}))`
      }
    })

    return config
  }

  const top5Config = {
    games: {
      label: "Games"
    },
    ...transformArrayToChartConfig(top5Data)
  } satisfies ChartConfig

  const totalOrdersConfig = {
    orders: {
      label: "Total orders"
    },
    ...transformArrayToChartConfig(totalOrdersData)
  } satisfies ChartConfig

  return (
    <div className="flex justify-between lg:gap-0 xl:gap-24 2xl:gap-32 h-[400px] w-full p-6">
      <Card className="bg-background flex-1 border-none shadow-none">
        <CardHeader className="py-2">
          <CardTitle className="text-xl text-primary">
            Last month total income: {totalSum.toFixed(2)}€ <br />5 most popular games:
          </CardTitle>
        </CardHeader>
        <CardContent className="h-4/5 flex justify-center items-center">
          <ChartContainer config={top5Config} className="aspect-square h-full">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent className="" indicator="dot" />}
              />
              <Pie
                data={top5Data}
                nameKey="title"
                dataKey="number"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            top 5
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            popular games
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card className="bg-background flex-1 border-none shadow-none">
        <CardHeader className="pt-2 pb-6">
          <CardTitle className="text-xl text-primary">
            Total orders for all time: {totalOrders}
          </CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <ChartContainer config={totalOrdersConfig} className="h-4/5 max-w-[250px] xl:max-w-full">
            <BarChart
              accessibilityLayer
              data={totalOrdersData}
              layout="vertical"
              margin={{
                left: 0
              }}
            >
              <YAxis
                dataKey="title"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                width={62}
                tickFormatter={(value) => value}
              />
              <XAxis dataKey="quantity" type="number" hide />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="quantity" layout="vertical" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default OrdersChart
