import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { EditOutlined } from "@mui/icons-material";
// Form lib
import { Field, FieldArray, Formik, getIn } from "formik";
// Validation lib
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropzone from "react-dropzone";
import FlexBetween from "./FlexBetween";

// Yup validation schema.
const postSchema = yup.object().shape({
  title: yup.string().required("First name is required"),
  description: yup.string().required("Last name is required"),
  image: yup.string().required("Picture is required"),
  tags: yup.array().of(yup.string()).required("Tags are required"),
  sections: yup.array().of(
    yup.object().shape({
      secTitle: yup.string().required("Required"),
      required: yup.string().required("Required"),
    })
  ),
});

const initialValuesPost = {
  title: "",
  description: "",
  image: "",
  tags: [],
  sections: [
    {
      secTitle: "",
      paragraph: "",
    },
  ],
};

const Form = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("image", values.image.name);

    const savedUserResponse = await fetch("http://localhost:3001/api/posts", {
      method: "POST",
      body: formData,
    });
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    return await register(values, onSubmitProps);
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesPost}
      validationSchema={postSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            gap="30px"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              justifyContent: "center",
              margin: "auto",
              marginTop: "4vh",
            }}
          >
            <Typography
              sx={{
                fontSize: "3vh",
              }}
            >
              Add a post
            </Typography>

            <TextField
              name="title"
              label="title"
              variant="outlined"
              fullWidth
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.title) && Boolean(errors.title)}
              helperText={touched.title && errors.title}
              sx={{}}
            />

            <TextField
              name="description"
              label="description"
              variant="outlined"
              fullWidth
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                Boolean(touched.description) && Boolean(errors.description)
              }
              helperText={touched.description && errors.description}
              sx={{}}
            />

            <FieldArray name="sections">
              {({ push, remove }) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {values.sections.map((p, index) => {
                    const secTitle = `sections[${index}].secTitle`;
                    const touchedsecTitle = getIn(touched, secTitle);
                    const errorsecTitle = getIn(errors, secTitle);
                    const paragraph = `sections[${index}].paragraph`;
                    const touchedParagraph = getIn(touched, paragraph);
                    const errorParagraph = getIn(errors, paragraph);

                    return (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "1vh",
                        }}
                        key={p.id}
                      >
                        <TextField
                          margin="normal"
                          variant="outlined"
                          label="secTitle"
                          name={secTitle}
                          value={p.secTitle}
                          required
                          helperText={
                            touchedsecTitle && errorsecTitle
                              ? errorsecTitle
                              : ""
                          }
                          error={Boolean(touchedsecTitle && errorsecTitle)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <TextField
                          margin="normal"
                          variant="outlined"
                          label="Paragraph"
                          name={paragraph}
                          value={p.paragraph}
                          required
                          helperText={
                            touchedParagraph && errorParagraph
                              ? errorParagraph
                              : ""
                          }
                          error={Boolean(touchedParagraph && errorParagraph)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                        <Button
                          margin="normal"
                          type="button"
                          color="secondary"
                          variant="outlined"
                          onClick={() => remove(index)}
                        >
                          x
                        </Button>
                      </Box>
                    );
                  })}
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() =>
                      push({ id: Math.random(), secTitle: "", paragraph: "" })
                    }
                  >
                    Add
                  </Button>
                </Box>
              )}
            </FieldArray>

            {/* file upload */}
          </Box>

          {/* BUTTONS */}
          <Box
            sx={{
              m: "auto",
              width: "15vh",
            }}
          >
            <Button
              type="submit"
              sx={{
                m: "2rem auto",
                p: "1rem",
                width: "15vh",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              Post
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
