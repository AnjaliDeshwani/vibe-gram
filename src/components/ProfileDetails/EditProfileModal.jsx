import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUserDetails } from "../../reducers/userSlice";
import { UserAvatar } from "../index";

export const EditProfileModal = ({ setEditModal }) => {
  const { allUsers } = useSelector((state) => state.users);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loggedInUser = allUsers?.find(
    (dbUser) => dbUser.username === user.username
  );

  const { firstName, lastName, username } = loggedInUser;
  const [editDetails, setEditDetails] = useState({
    bio: loggedInUser.bio,
    website: loggedInUser.website,
  });

  const { bio, website } = editDetails;

  const changeDetailsHandler = (e) =>
    setEditDetails({ ...editDetails, [e.target.name]: e.target.value });

  const closeEditModal = () => {
    setEditModal(false);
  };

  const saveEditedDetails = () => {
    dispatch(editUserDetails({ userData: editDetails, token }));
    closeEditModal();
  };

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-10"></div>
      <div
        className="h-full w-full fixed z-50  top-0 left-0 flex items-center justify-center"
        onClick={closeEditModal}
      >
        <div
          className="w-[30%] bg-white ring-1 ring-gray-300 shadow-inner p-4 rounded-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <form className="flex flex-col gap-2.5" onSubmit={saveEditedDetails}>
            <div className=" w-full flex items-center">
              <span className="ml-auto font-semibold text-lg text-center">
                Edit Profile
              </span>
              <button
                className="ml-auto hover:bg-neutral-300 h-min hover:rounded-full px-2 py-0.5 mr-2"
                type="button"
                onClick={closeEditModal}
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>

            <label className="edit-profile relative w-max cursor-pointer mx-auto my-2">
              <input type="file" accept="image/*" className="hidden" />

              <UserAvatar user={loggedInUser} profile={true} />

              <i className="fa-solid fa-camera absolute text-md bottom-0 right-0"></i>
            </label>

            <div className="flex flex-col  py-1 px-2 ">
              <div className="text-xs">Name</div>
              <div>
                {firstName} {lastName}
              </div>
            </div>
            <div className="flex flex-col  py-1 px-2 ">
              <div className="text-xs">Username</div>
              <div>{username}</div>
            </div>
            <div className="flex flex-col items-center py-1 px-2  rounded border-lightGrey border focus-within:border-sky-600">
              <label className="w-full">
                <div className="text-xs">Bio</div>
                <input
                  className="bg-inherit w-full text-sm outline-none border-none"
                  type="text"
                  name="bio"
                  value={bio}
                  onChange={changeDetailsHandler}
                />
              </label>
            </div>
            <div className="flex flex-col items-center py-1 px-2  rounded border-lightGrey border focus-within:border-sky-600">
              <label className="w-full">
                <div className="text-xs">Website</div>
                <input
                  className="bg-inherit w-full text-sm outline-none border-none"
                  type="text"
                  name="website"
                  value={website}
                  onChange={changeDetailsHandler}
                />
              </label>
            </div>
            <button
              className="self-center w-24 bg-gradient-to-r from-sky-400 to-cyan-300 py-2 px-4 rounded-full"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
