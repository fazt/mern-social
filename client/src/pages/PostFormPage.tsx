import { Formik, Form } from "formik";
import { createNewPost } from "../app/features/posts/postsSlices";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";

function CreatePost() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => dispatch(createNewPost(values))}
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
            <button type="submit">create post</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreatePost;
