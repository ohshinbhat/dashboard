import React from 'react'
import { StatisticsChart } from '@/widgets/charts'
import { Typography } from '@material-tailwind/react'
import { ClockIcon } from "@heroicons/react/24/outline";
import { statisticsChartsData } from '@/data';

const SpeedIdle= () => {
  return (
    <div>
        <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
            {statisticsChartsData.map((props) => (
            <StatisticsChart
                key={props.title}
                {...props}
                footer={
                <Typography
                    variant="small"
                    className="flex items-center font-normal text-blue-gray-600"
                >
                    <ClockIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
                    &nbsp;{props.footer}
                </Typography>
                }
            />
            ))}
        </div>
    </div>
  )
}

export default SpeedIdle