import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function PostFilter({filter,setFilter}) {

  return (
    <div>
      <MyInput
        placeholder="Search..."
        value={filter.search}
        onChange={(e) => setFilter({...filter,search:e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChangeSelect={(selectedSort)=>setFilter({...filter,sort:selectedSort})}
        defaultValue={"Sort by"}
        options={[
          { value: "title", name: "title" },
          { value: "body", name: "body" },
        ]}
      />
    </div>
  );
}
