import React from "react";
import cplusplus from "../assets/icons/cplusplus.svg";
import node from "../assets/icons/node.svg";
import aws from "../assets/icons/aws.svg";
import mongo from "../assets/icons/mongo.svg";
import exps from "../assets/icons/express.svg";
import r from "../assets/icons/react.svg";
import redix from "../assets/icons/redix.svg";
import git from "../assets/icons/git.svg";
import postsql from "../assets/icons/postgresql.svg";

const SkillsBar = () => {
    return (
        <div className="skill-bar">
            <div className="tech tech-1">
                <img src={cplusplus} alt="" />
            </div>
            <div className="tech tech-2">
                <img src={aws} alt="" />
            </div>
            <div className="tech tech-3">
                <img src={mongo} alt="" />
            </div>
            <div className="tech tech-4">
                <img src={exps} alt="" />
            </div>
            <div className="tech tech-5">
                <img src={r} alt="" />
            </div>
            <div className="tech tech-6">
                <img src={node} alt="" />
            </div>
            <div className="tech tech-7">
                <img src={redix} alt="" />
            </div>
            <div className="tech tech-8">
                <img src={git} alt="" />
            </div>
            <div className="tech tech-9">
                <img src={postsql} alt="" />
            </div>
        </div>
    )
}

export default SkillsBar;