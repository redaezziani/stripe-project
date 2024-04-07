import React from 'react'


interface DataCardProps {
    titel : string
    number : number
    type? : 'paid' | 'faild' | 'refund' | 'canceled' | 'none'
    percentage? : number
    descreption? : string
    currency?: string 
}
const DataCard = ({titel, number, type, percentage, descreption,currency=''} : DataCardProps) => {
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
       {number} {currency}
      </p>
    </div>

    <div className={`mt-1 flex gap-1 ${type === 'paid' ? 'text-[#00db80]' : type === 'faild' ? 'text-red-500' : type === 'refund' ? 'text-[#00db80]' : type === 'canceled' ? 'text-red-500' : 'text-amber-600'}`}>
      {type === 'none' ? '' : type === 'paid' ? svgIncrease : type === 'faild' ? svgDecrease : type === 'refund' ? svgIncrease : type === 'canceled' ? svgDecrease : ''}
        <p className="flex gap-2 text-xs">
            {type!=='none' &&
            <span className="font-semibold">
                {type === 'paid' ? '+%' : type === 'faild' ? '-%' : type === 'refund' ? '+%' : type === 'canceled' ? '-%' : ''}{percentage}
            </span>}
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