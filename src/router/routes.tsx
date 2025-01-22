import { Navigate, useRoutes } from "react-router-dom";
import Home from "../components/pages/hone";
import BooksPage from "../components/pages/hone/books";
import QandA from "../components/pages/hone/QandA";
import News from "../components/pages/hone/NewsPage/Index";
import CompetitionsPage from "../components/pages/hone/CompetitionsPage";
import MissionVisionPage from "../components/pages/hone/Mission";
import BookDetailPage from "../components/pages/hone/books/OneBook";
import BlogDetailPage from "../components/pages/hone/NewsPage/One";
import CompetitionDetail from "../components/pages/hone/CompetitionsPage/One";

export default function AppRoutes() {
	return useRoutes([
    { path: "/", element: <Navigate to="/home" replace /> },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "books",
      element: <BooksPage />,
    },
    {
      path: "book/:id",
      element: <BookDetailPage />,
    },
    {
      path: "questions",
      element: <QandA />,
    },
    {
      path: "competitions",
      element: <CompetitionsPage />,
    },
    {
      path: "competition/:id",
      element: <CompetitionDetail />,
    },
    {
      path: "mission",
      element: <MissionVisionPage />,
    },
    {
      path: "news",
      element: <News />,
    },
    {
      path: "new/:id",
      element: <BlogDetailPage />,
    },
	]);
}
