import { Postlink } from "../../componentes/Postlink";
import { Postinfo } from "../../componentes/Postinfo";
import { useLocation } from "react-router-dom";
import { getIssueDetails } from "../../services/get";
import { useState, useEffect } from "react";

export function IssueDetails() {
  const location = useLocation();
  const urlParam = location.pathname.split("/")[2];
  // location.pathname =  localhost:3000/issue/1
  // ['localhost:3000', 'issue', 1]
  const [issueDetail, setIssueDetail] = useState();
    

  async function handleGetIssueDetail() {
    const repo = "GithubBlog";
    const response = await getIssueDetails("gillcoutinho", repo, +urlParam);
    if (response) {
      setIssueDetail(response);
    }
  }

  useEffect(() => {
    if (urlParam) {
      handleGetIssueDetail();
    }
  }, [urlParam]);

  

  return (
    <div>
      <Postlink />
      <Postinfo issueDetail={issueDetail}/>
    </div>
  );
}
