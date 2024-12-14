import { AgeDistributionChart, TopCity, TopJobType } from "@/app/admin/page";

export interface DashboardModel {
  TOTAL_EMPLOYEE: number;
  TOTAL_USERS: number;
  INACTIVE_USERS: number;
  MALE_USERS: number;
  MALE_PERCENTAGE: number;
  FEMALE_USERS: number;
  FEMALE_PERCENTAGE: number;
  LAST_SIX_MONTHS_DATA: unknown;
  MALE_FEMALE_USERS_RATIO: unknown;
  AGE_DISTRIBUTION: AgeDistributionChart[];
  TOP_CITIES: TopCity[];
  JOB_TYPES: TopJobType[];

}
