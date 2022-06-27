import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { CheckOutlined } from "@ant-design/icons";
import { notification } from "antd";

import slugify from "slugify";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Radio } from "../../components/checkbox";
import { Dropdown } from "../../components/dropdown";
import { Field } from "../../components/field";

import ImageUpload from "../../components/image/ImageUpload";
import { Input } from "../../components/input";
import { Label } from "../../components/Label";
import Toggle from "../../components/toggle/Toggle";
// import { useAuth } from "../../contexts/auth-context";
import { db } from "../../filebase/filebase-config";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import { postStatus } from "../../utils/constants";

const PostAddNewStyles = styled.div``;

const PostAddNew = () => {
  // const { userInfor } = useAuth();
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: "2",
      categoryId: "",
      hot: false,
      image: "",
    },
  });
  const watchStatus = watch("status");
  const watchHot = watch("hot");
  const { image, progress, handleSelectImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");

  // const watchCategory = watch("category");

  const addPostHandler = async (values) => {
    const cloneValues = { ...values };
    cloneValues.slug = slugify(values.slug || values.title, { lower: true });
    cloneValues.status = Number(values.status);
    const colRef = collection(db, "posts");
    await addDoc(colRef, {
      ...cloneValues,
      image,
      // userId: userInfor.id,
    });

    notification.success({
      message: "Create new post successfully!",
      description: "",
      icon: (
        <CheckOutlined
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });

    reset({
      title: "",
      slug: "",
      status: "2",
      categoryId: "",
      hot: false,
      image: "",
    });

    setSelectCategory({});
  };

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "categories");
      const q = query(colRef, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(result);
    }

    getData();
  }, []);

  const handleClickOption = (item) => {
    setValue("CategoryId", item.id);
    setSelectCategory(item);
  };

  return (
    <PostAddNewStyles>
      <h1 className="dashboard-heading">Add new post</h1>
      <form onSubmit={handleSubmit(addPostHandler)}>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
              required
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Image</Label>
            <ImageUpload
              onChange={handleSelectImage}
              handleDeleteImage={handleDeleteImage}
              className="h-[250px]"
              progress={progress}
              image={image}
            ></ImageUpload>
          </Field>

          <Field>
            <Label>Category</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={`${selectCategory.name || "Select the category"}`}
              ></Dropdown.Select>
              <Dropdown.List>
                {categories.length > 0 &&
                  categories.map((item) => (
                    <Dropdown.Option
                      key={item.id}
                      onClick={() => handleClickOption(item)}
                    >
                      {item.name}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
            {/* {selectCategory?.name && (
              <span className="inline-block p-3 rounded-lg bg-gray-200 text-sm font-medium">
                {selectCategory?.name}
              </span>
            )} */}
          </Field>

          {/* <Field>
            <Label>Author</Label>
            <Input control={control} placeholder="Find the author"></Input>
          </Field> */}
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Feature post</Label>
            <Toggle
              on={watchHot === true}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle>
          </Field>
          <Field>
            <Label>Status</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.APPROVED}
                onClick={() => setValue("status", "approved")}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.PENDING}
                onClick={() => setValue("status", "pending")}
                value={postStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.REJECTED}
                onClick={() => setValue("status", "reject")}
                value={postStatus.REJECTED}
              >
                Reject
              </Radio>
            </div>
          </Field>
        </div>
        <Button type="submit" className="mx-auto">
          Add new post
        </Button>
      </form>
    </PostAddNewStyles>
  );
};

export default PostAddNew;
