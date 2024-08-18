// import React from "react";
import Card from "../components/Card";
export default function Coordinators() {
  return (
    <div className="text-white h-full w-full flex flex-col justify-center items-center gap-24">
      <h1 className="text-4xl uppercase ">Organising Committee</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl uppercase ">Organisers</h1>
        <div className="h-full w-full flex gap-4 justify-center items-center">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl uppercase ">Faculty Coordinators</h1>
        <div className="h-full w-full flex gap-4 justify-center items-center">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}
