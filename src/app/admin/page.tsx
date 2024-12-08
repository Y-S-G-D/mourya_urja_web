'use client';

import React,{useEffect,useCallback} from "react";

import { User, Users, ClipboardCheck } from "lucide-react";
import { GenderRatioChart } from "@/components/gender-ratio-chart";
import { AgeDistributionChart } from "@/components/age-distribution-chart";
import { TopLocationsChart } from "@/components/top-locations-chart";
import { NewRegistrationChart } from "@/components/new-registration-chart";
import { useDashboardStore } from "@/stores/dashboard-store";
import { DashboardModel } from "@/models/dashboard-model";


export interface AgeDistributionChart{
  male:number,
  female:number,
  ageRange:string

}

export interface TopCity{
  userCount:number,
  city:string
}

export interface TopJobType{
  count:number,
  jobType:string
}

const getTopSectionData = (dashboardData:DashboardModel | null):{title:string,count:number,icon:React.ElementType,tag:string}[]=>{
  const topSectionData = [
    {
      title: "Total Employees",
      count: dashboardData?.TOTAL_EMPLOYEE ?? 0,
      icon: User,
      tag: "+100 from last month",
    },
    {
      title: "Total Users",
      count: dashboardData?.TOTAL_USERS ?? 0,
      icon: Users,
      tag: "+100 from last month",
    },
    {
      title: "Pending Approval",
      count: dashboardData?.INACTIVE_USERS ?? 0,
      icon: ClipboardCheck,
      tag: "+20 from last month",
    },
  ]
  return topSectionData;
}

const Dashboard = () => {
  const { getDashboardData,isLoading } = useDashboardStore();
  const [topSectionData, setTopSectionData] = React.useState<{ title: string; count: number; icon: React.ElementType; tag: string }[]>([]);
  const [dashboardData, setDashboardData] = React.useState<DashboardModel | null>(null);


  const fetchDashboardData = useCallback(async () => {
    await getDashboardData().then((data) => {
      setDashboardData(data);

      setTopSectionData(getTopSectionData(data));
    });
    
  }, [getDashboardData, setTopSectionData]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  if (isLoading) {
    return <h1 className="text-3xl font-semibold">Loading...</h1>;
  }
 

  return (
    <div className=" pt-20 flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-3">
        {topSectionData.map((data, index) => {
          return (
            <div
              key={index}
              className="border-2 border-border rounded-xl bg-muted p-6"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-base">{data.title}</h2>
                <data.icon className="size-5 text-sidebar-primary" />
              </div>
              <h1 className="text-3xl font-semibold mb-1">{data.count}</h1>
              <p className="text-xs text-muted-foreground">{data.tag}</p>
            </div>
          );
        })}
      </div>
      <div className="grid auto-rows-min gap-8 md:grid-cols-2 my-4">
        <GenderRatioChart maleCount={dashboardData?.MALE_USERS ?? 0} femaleCount={dashboardData?.FEMALE_USERS ?? 0}/>
        <AgeDistributionChart chartData={dashboardData?.AGE_DISTRIBUTION ?? []} />
      </div>
      <div className="grid auto-rows-min gap-8 md:grid-cols-2 my-4">
        <TopLocationsChart topCities={dashboardData?.TOP_CITIES ?? []}/>
        <NewRegistrationChart />
      </div>
    </div>
  );
};

export default Dashboard;
