import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const TaskSkeleton: React.FC = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <SkeletonTheme>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Skeleton height={20} width={20} style={{ marginRight: '20px' }} />
          <div style={{ width: '100%', marginRight: '20px' }}>
            <Skeleton height={24} />
          </div>
          <Skeleton height={48} width={130} style={{ borderRadius: '23px' }} />
        </div>
      </SkeletonTheme>
    </div>
  )
}

const TasksSkeleton: React.FC = () => {
  return (
    <>
      <TaskSkeleton />
      <TaskSkeleton />
      <TaskSkeleton />
    </>
  )
}

export default TasksSkeleton
