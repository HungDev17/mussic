import React from "react";
import { memo } from "react";
import moment from "moment";
import "moment/locale/vi";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";
const SongItem = ({ sid, thumbnail, title, artists, releaseDate }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(actions.setCurSongId(sid));
        dispatch(actions.play(true));
      }}
      className="w-[30%] flex flex-auto p-[10px] hover:bg-[#ECD0D0] items-center"
    >
      <img
        src={thumbnail}
        alt="thumbnail"
        className="w-[60px] h-[60px] object-cover rounded-md mr-[10px]"
      />
      <div className="flex flex-col">
        <span className="text-sm font-[Inter,sans-serif] font-medium text-[#32323d]">
          {title}
        </span>
        <span className="text-xs text-[#696969] mt-[3px] font-normal">
          {artists}
        </span>
        <span className="text-xs text-[#696969] mt-[3px] font-normal">
          {moment(releaseDate * 1000).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default memo(SongItem);
