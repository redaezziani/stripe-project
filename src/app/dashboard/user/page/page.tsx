import { BarChartExample } from "@/components/admin/bar-chart"
import { LineChartExample } from "@/components/admin/line-chart"
import DardsData from "@/components/admin/ui/analys/user/cards-data"
import { EreaChart } from "@/components/admin/ui/area-chart"


const MangaManagementPage = async () => {

  return (
    <main
      className='w-full flex min-h-screen overflow-y-scroll   relative justify-start items-start gap-3 flex-col'
    >
      <DardsData/>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3 ">
        <div className="w-full col-span-1 overflow-hidden">
          <LineChartExample />
        </div>
        <div className="w-full col-span-1 overflow-hidden">
          <BarChartExample />
        </div>
        <div className="w-full col-span-1 overflow-hidden">
          <LineChartExample />
        </div>
      </div>

      <div className="w-full h-[400px] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-5 gap-3 ">
        <div className="w-full h-[400px] col-span-3 overflow-hidden">
          <EreaChart />
        </div>
        <div className="w-full col-span-2 overflow-hidden">
          <BarChartExample />
        </div>
      </div>

    </main>
  )
}

export default MangaManagementPage