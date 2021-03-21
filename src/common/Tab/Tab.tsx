import React, { useEffect, useState } from 'react'
import Text from '../Text/Text'
import { TabsNavStyles, TabBody, TabStyles, CountStyles } from './styles'
import { colors } from '../constants'

export type TTabProps = {
  title: string
  body?: React.ReactNode
}

type TTabsProps = {
  getCounts: Promise<number[]>
  tabsPayload: Array<TTabProps>
}

const Tab = ({ getCounts, tabsPayload }: TTabsProps): JSX.Element => {
  const [tabsCount, setTabsCount] = useState<number[]>([])
  const [currentTab, setCurrentTab] = useState(0)

  const handleClick = (i: number) => {
    setCurrentTab(i)
  }

  useEffect(() => {
    getCounts.then((result) => {
      setTabsCount(result)
    })
  }, [])

  return tabsPayload.length ? (
    <div>
      <TabsNavStyles>
        {tabsPayload.map((tab, i) => {
          return (
            <TabStyles key={'tab_nav_item_' + tab.title + '_' + i} onClick={() => handleClick(i)}>
              {Boolean(tabsCount[i]) && (
                <CountStyles>{tabsCount[i] > 9 ? tabsCount[i] : '0' + tabsCount[i]}</CountStyles>
              )}
              <Text color={colors.gray}>{tab.title}</Text>
            </TabStyles>
          )
        })}
      </TabsNavStyles>
      {tabsPayload.map((tab, i) => {
        return (
          <TabBody isActive={currentTab === i ? true : false} key={'tab_body_' + tab.title + '_' + i}>
            {tab.body}
          </TabBody>
        )
      })}
    </div>
  ) : (
    <></>
  )
}

export default Tab
