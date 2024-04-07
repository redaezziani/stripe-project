'use client';
import { Action, KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarSearch } from 'kbar';


interface CommandBarProps  extends React.HTMLAttributes<HTMLDivElement> {
    action : Action[];
}

const CommandBar: React.FC<CommandBarProps> = ({action}) => {
  return (
    <KBarProvider actions={action}>
        <KBarPortal >
            <KBarPositioner
            className=' bg-black bg-opacity-50 backdrop-blur-md'
            >
                <KBarAnimator
                className=' bg-white rounded flex justify-start items-center h-80 flex-col gap-4 w-[35rem] overflow-hidden p-4'
                >
                    <KBarSearch />
                  {/* <KBarResults /> */}
                </KBarAnimator>
            </KBarPositioner>
        </KBarPortal>
    </KBarProvider>
  )
}

export default CommandBar