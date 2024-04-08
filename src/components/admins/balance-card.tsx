import React from 'react';

interface DataCardProps {
  titel: string;
  number: number;
  type?: 'hold' | 'balance' | 'withdraw' | 'none'; // Corrected 'withdaw' to 'withdraw'
  description?: string; // Corrected 'descreption' to 'description'
  currency?: string;
}

const MoneyCard = ({ titel, number, type, description, currency = '' }: DataCardProps) => {
  return (
    <article className="rounded-lg border border-slate-300/30 p-6 bg-background">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{titel}</p>
        <p
          className={`text-2xl font-medium ${
            type === 'hold'
              ? 'text-red-500'
              : type === 'balance'
              ? 'text-amber-500'
              : type === 'withdraw' // Corrected 'withdaw' to 'withdraw'
              ? 'text-[#00db80]'
              : type === 'none'
              ? 'text-blue-500'
              : 'text-slate-600'
          }`}
        >
          {number} {currency}
        </p>
      </div>
      <div className={`mt-1 flex gap-1 ${
          type === 'hold'
            ? 'text-red-500'
            : type === 'balance'
            ? 'text-amber-500'
            : type === 'withdraw' // Corrected 'withdaw' to 'withdraw'
            ? 'text-[#00db80]'
            : type === 'none'
            ? 'text-blue-500'
            : 'text-slate-600'
        }`}
      >
        <p className="flex gap-2 text-xs">
          <span className="text-gray-500 dark:text-gray-400">{description}</span>
        </p>
      </div>
    </article>
  );
};

export default MoneyCard;
