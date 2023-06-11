import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useBookedClass = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: bookedClasses = [] } = useQuery({
    queryKey: ["bookedClasses", user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axiosSecure(`/booked-classes?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [bookedClasses, refetch];
};

export default useBookedClass;
