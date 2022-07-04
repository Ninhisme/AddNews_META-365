// import { SignInMethod } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import CategoryAddNew from "./module/category/CategoryAddNew";
import CategoryManage from "./module/category/CategoryManage";
import CategoryUpdate from "./module/category/CategoryUpdate";
// import PageIndex from "./module/dashbroad";
import DashboardLayout from "./module/dashbroad/DashbroadLayout";
import PostAddNew from "./module/post/PostAddNew";

import PostManage from "./module/post/PostManage";
import DashboardPage from "./Page/DashbroadPage";
import SignUpPage from "./Page/SignUpPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>

          {/* <Route path="/dashboard" element={<PageIndex />} /> */}
          <Route element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/dashboard"
              element={<DashboardPage></DashboardPage>}
            ></Route>
            <Route
              path="/manage/post"
              element={<PostManage></PostManage>}
            ></Route>
            <Route
              path="/manage/add-post"
              element={<PostAddNew></PostAddNew>}
            ></Route>

            <Route
              path="/manage/category"
              element={<CategoryManage></CategoryManage>}
            ></Route>

            <Route
              path="/manage/add-category"
              element={<CategoryAddNew></CategoryAddNew>}
            ></Route>

            <Route
              path="/manage/update-category"
              element={<CategoryUpdate></CategoryUpdate>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
