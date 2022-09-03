import { Formik, Form } from "formik";
import { createPost } from "../api/posts.request";
import { createNewPost } from "../app/features/posts/postsSlices";
import { useDispatch } from "react-redux";

function CreatePost() {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(false);
          try {
            // const response = await createPost(values);
            // console.log(response)
            dispatch(createNewPost());
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange }) => (
          <Form>
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
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
