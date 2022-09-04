import { Formik, Form } from "formik";
import { createNewPost } from "../app/features/posts/postsSlices";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);
          dispatch(createNewPost(values));
          navigate("/posts");
          actions.setSubmitting(false);
        }}
      >
        {({ handleChange }) => (
          <Form>
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
              autoFocus
            />
            <textarea
              name="description"
              placeholder="text"
              onChange={handleChange}
            />
            <button type="submit">Create Post</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreatePost;
