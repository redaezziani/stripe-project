import React from 'react'


interface DataCardProps {
    titel : string
    price : number
    type? : 'increase' | 'decrease' | 'none'
    percentage? : number
    descreption? : string
    currency?: string 
}
const DataCard = ({titel, price, type, percentage, descreption,currency} : DataCardProps) => {
  return (
    <article
    className="rounded-lg border border-slate-300/30  p-6 bg-background"
  >
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {titel}
      </p>

      <p
      className="text-2xl font-medium text-gray-900 dark:text-white">
        {currency}{price}
      </p>
    </div>

    <div className={`mt-1 flex gap-1 ${type === 'increase' ? 'text-[#00db80]' : type === 'none' ? 'text-amber-600' : 'text-red-500'}`}>
      {type === 'none' ? '' : type === 'increase' ? svgIncrease : svgDecrease}

        <p className="flex gap-2 text-xs">
            <span className="font-semibold">
               {type === 'none' ? '' : type === 'increase' ? '+%' : '-%'}{percentage}
            </span>

            <span className="text-gray-500 dark:text-gray-400">
              {descreption}
            </span>
        </p>
    </div>
  </article>
  )
}
/*
*
*Increase is mean the price is -20.81% since last week
*/
const svgIncrease = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
)

/*
*
*Decrease is mean the price is -20.81% since last week
*/
const svgDecrease = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
    />
  </svg>
)
export default DataCard