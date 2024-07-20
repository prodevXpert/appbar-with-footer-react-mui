import React, { useCallback, useEffect, useState } from "react";
import { faClock, faGbp } from "@fortawesome/free-solid-svg-icons";
import { faGlobeOceania } from "@fortawesome/free-solid-svg-icons/faGlobeOceania";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Get, Post, Put } from "../actions/apiActions";
import { API_URLS } from "../constants/API_URLS";
import { useSnackbar } from "notistack";

function CoursePreviewCard({ course }) {
  const { categoryId, courseId } = useParams();
  const userId = parseInt(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [isCourseEnrolled, setIsCourseEnrolled] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState(null);
  const [contents, setContents] = useState([]); //
  // const [isAllSectionsCompleted, setIsAllSectionsCompleted] = useState(false); // [

  const checkIfCourseEnrolled = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.checkExistingEnrollment
          .replace(":courseId", parseInt(courseId))
          .replace(":userId", userId),
        (response) => {
          setIsCourseEnrolled(response.isEnrolled);
          setEnrollmentData(response.enrollment);
        },
        (error) => {
          enqueueSnackbar("Failed to check if course is enrolled", {
            variant: "error",
          });
        }
      );
    } catch (error) {
      enqueueSnackbar("Failed to check if course is enrolled", {
        variant: "error",
      });
    }
  }, [courseId, enqueueSnackbar, userId]);

  useEffect(() => {
    setContents(course?.contents || []);
    // // check if sections are completed
    // const check = course?.contents?.every((content) =>
    //   content?.sections?.every((section) => section?.status === "Completed")
    // );
    // console.log("ksjfhsdfsdf", check);
    // setIsAllSectionsCompleted(check);
    checkIfCourseEnrolled();
  }, [course, checkIfCourseEnrolled]);

  const handleSectionStart = (
    contentOrder,
    sectionOrder,
    contentId,
    section,
    lastIndex
  ) => {
    const userId = parseInt(localStorage.getItem("userId"));
    const courseId = course.id;
    const previous_content_order = contentOrder;
    const previous_section_order = sectionOrder;
    // const current_content_order = contentOrder
    const current_section_order = sectionOrder + 1;
    // Update Enrollement
    try {
      Put(
        {
          id: isCourseEnrolled?.id,
          courseId: courseId,
          userId: userId,
          contentId: contentId,
          sectionId: section.id,
          // current_content_order: current_content_order,
          previous_content_order: previous_content_order,
          current_section_order: current_section_order,
          previous_section_order: previous_section_order,
          status: lastIndex === true ? "done" : "enrolled",
        },
        API_URLS.updateEnrollment,
        (response) => {
          setEnrollmentData(response);
          navigate(
            `/dashboard/course-categories/${categoryId}/course-preview/${contentId}/section/${section?.id}`
          );
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (error) {}
  };

  // const handleSectionStart = (section, contentId) => {
  //   try {
  //     Put(
  //       {},
  //       API_URLS.markSectionComplete
  //         .replace(":contentId", contentId)
  //         .replace(":sectionId", section?.id),
  //       (response) => {
  //         navigate(
  //           `/dashboard/course-categories/${categoryId}/course-preview/${contentId}/section/${section?.id}`
  //         );
  //       },
  //       (error) => {
  //         enqueueSnackbar("Failed to mark section as complete", {
  //           variant: "error",
  //         });
  //       }
  //     );
  //   } catch (error) {
  //     enqueueSnackbar("Failed to mark section as complete", {
  //       variant: "error",
  //     });
  //   }
  // };
  // check if each section has status of completion

  const handleStartNewCourse = () => {
    try {
      Post(
        {},
        API_URLS.enrollCourse
          .replace(":courseId", courseId)
          .replace(":userId", userId),
        (response) => {
          checkIfCourseEnrolled();
          enqueueSnackbar("Course started successfully", {
            variant: "success",
          });
        },
        (error) => {
          enqueueSnackbar("Failed to start new course", {
            variant: "error",
          });
        }
      );
    } catch (error) {
      enqueueSnackbar("Failed to start new course", {
        variant: "error",
      });
    }
  };

  const handleQuizzStart = (quiz, contentId) => {
    navigate(
      `/dashboard/course-categories/${categoryId}/course-preview/${contentId}/quiz/${quiz?.id}`
    );
  };

  const handleMarkCourseComplete = () => {
    try {
      Post(
        {},
        API_URLS.markCourseComplete
          .replace(":courseId", courseId)
          .replace(":userId", userId),
        (response) => {
          enqueueSnackbar("Course marked as complete", {
            variant: "success",
          });
          checkIfCourseEnrolled()
        },
        (error) => {
          enqueueSnackbar("Failed to mark course as complete", {
            variant: "error",
          });
        }
      );
    } catch (error) {
      enqueueSnackbar("Failed to mark course as complete", {
        variant: "error",
      });
    }
  };

  console.log("sdhgfsdbfjksdfsdf", enrollmentData);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={course.img_url}
            alt={course.title}
            style={{ width: "100%" }}
          />
          <img
            src="https://s3.eu-west-2.amazonaws.com/azilositeimages/public/icons/chat.png"
            alt={course.title}
            style={{ width: "40%", height: "150px" }}
          />
          <Typography variant="h6" gutterBottom color="#403D39">
            Yvette Sanderson
          </Typography>
          <Typography variant="h6" gutterBottom color="#CCC5C5">
            Assistant Nursery Manager
          </Typography>
          <Typography variant="h6" gutterBottom color="#666669">
            Azilo impressed me with the quality of their courses and the girls
            enjoyed doing them. I'm very glad we tried Azilo out.
          </Typography>
          <Button
            sx={{
              background: "#7AC29A",
              height: "50px",
              color: "#fff",
              borderRadius: "0px",
              width: "40%",
            }}
          >
            Continue
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={8} xl={9}>
        <Card
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                color: "#CFD7ED",
              }}
            >
              AZILO TRAINING
            </Typography>
            <Typography variant="h4" gutterBottom>
              {course.title}
            </Typography>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Button
                style={{
                  background: "transparent",
                  color: "#F3C19F",
                }}
              >
                info
              </Button>
              <Button
                style={{
                  background: "transparent",
                  color: "#F3C19F",
                }}
              >
                Who is this for?
              </Button>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center", // Changed to align icons and text properly
                gap: 2, // Adds spacing between items
              }}
              mt={2}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FontAwesomeIcon icon={faGbp} />
                <span>{course.price}</span>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FontAwesomeIcon icon={faGlobeOceania} />
                <span>{course.location}</span>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  {course.duration < 60
                    ? course.duration + " mins"
                    : course.duration > 60
                    ? course.duration / 60 + " hours"
                    : course.duration + " seconds"}{" "}
                </span>
              </Box>
            </Box>
            <Typography variant="body1" gutterBottom color="#252462" mt={2}>
              {course.introduction}
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Card
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <CardHeader title="Contents" />
          <CardContent>
            {contents?.map((content, contentIndex) => (
              <div key={content?.id} style={{ marginBottom: "16px" }}>
                <>
                  <Typography variant="h6" sx={{ color: "#F0A810" }}>
                    {content?.heading}
                  </Typography>
                  {content?.sections?.map((section, index) => (
                    <div key={section?.id} style={{ marginBottom: "16px" }}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        marginLeft="16px"
                      >
                        <Typography variant="h6">{section?.title}</Typography>
                        {isCourseEnrolled && (
                          <Button
                            variant={
                              section?.order >
                              enrollmentData?.current_section_order
                                ? "outlined"
                                : "contained"
                            }
                            disabled={
                              section?.order >
                              enrollmentData?.current_section_order
                            }
                            sx={{
                              marginLeft: "16px",
                              background: "#7AC29A",
                            }}
                            onClick={() => {
                              let lastIndex = false;
                              if (
                                contentIndex === contents.length - 1 &&
                                index === content.sections.length - 1
                              ) {
                                lastIndex = true;
                              }
                              if (
                                section.order <
                                enrollmentData?.current_section_order
                              ) {
                                navigate(
                                  `/dashboard/course-categories/${categoryId}/course-preview/${content.id}/section/${section?.id}`
                                );
                              } else {
                                handleSectionStart(
                                  content?.content?.order,
                                  section.order,
                                  content.id,
                                  section,
                                  lastIndex
                                );
                              }
                            }}
                          >
                            {section?.order ===
                            enrollmentData?.current_section_order
                              ? "Next"
                              : section?.order >
                                enrollmentData?.current_section_order
                              ? "Not Started"
                              : "Completed"}
                          </Button>
                        )}
                      </Box>
                    </div>
                  ))}
                  {/* {content?.quizzez?.length > 0 && (
                    <Typography variant="h6" sx={{ color: "#F0A810" }}>
                      Quize
                    </Typography>
                  )} */}
                  {/* Add quizzes here */}
                  {content?.quizzez?.map((quiz) => (
                    <div key={quiz?.id} style={{ marginBottom: "16px" }}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        marginLeft="16px"
                      >
                        <Typography variant="h6">{quiz?.title}</Typography>
                        {isCourseEnrolled && (
                          <Button
                            variant="outlined"
                            sx={{
                              background:
                                quiz?.is_attempted === "true"
                                  ? "#1976D2"
                                  : "#F3C19F",
                              color: "#fff",
                              marginLeft: "16px",
                              "&:hover": {
                                background: "#F3C19F",
                              },
                            }}
                            onClick={() => handleQuizzStart(quiz, content?.id)}
                          >
                            {quiz?.is_attempted === "true"
                              ? "Completed"
                              : "Start"}
                          </Button>
                        )}
                      </Box>
                    </div>
                  ))}
                </>
              </div>
            ))}
          </CardContent>
          <Box sx={{ flexGrow: 1 }} />
          <CardActions>
            {/* Center the button */}
            {!isCourseEnrolled && (
              <Button
                sx={{
                  background: "#7AC29A",
                  height: "50px",
                  color: "#fff",
                  borderRadius: "0px",
                  width: "100%",
                  marginLeft: "200px",
                  "&:hover": {
                    background: "#8AC29A",
                  },
                }}
                onClick={() => handleStartNewCourse()}
              >
                {isCourseEnrolled ? "Continue" : "Start Course"}
              </Button>
            )}
            {enrollmentData && enrollmentData.status !== "enrolled" && (
              <Button
                sx={{
                  background: "#7AC29A",
                  height: "50px",
                  color: "#fff",
                  borderRadius: "0px",
                  width: "100%",
                  marginLeft: "200px",
                  "&:hover": {
                    background: "#8AC29A",
                  },
                }}
                onClick={() => {
                  if (enrollmentData && enrollmentData.status === "completed") {
                    // navigate to certificates page
                    navigate(`/dashboard/certificates`);
                  } else if (
                    enrollmentData &&
                    enrollmentData.status === "done"
                  ) {
                    handleMarkCourseComplete();
                  }
                }}
              >
                {enrollmentData && enrollmentData.status === "done"
                  ? "Mark Course Complete"
                  : enrollmentData && enrollmentData.status === "completed"
                  ? "Course Completed"
                  : "Continue"}
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CoursePreviewCard;
