export const UserAvatar = ({ user, profile }) => {
  const avatar = user?.avatarURL;

  const firstNameInitial = user?.firstName[0];
  const lastNameInitial = user?.lastName[0];

  const userInitials = firstNameInitial + lastNameInitial;

  console.log(userInitials);
  // console.log(
  //   firstNameInitial &&
  //     firstNameInitial[0].toUpperCase() + lastNameInitial &&
  //     lastNameInitial[0].toUpperCase()
  // );

  return (
    <>
      {avatar ? (
        <img
          src={avatar}
          alt={user.username}
          className={`${
            profile ? "w-32 h-32" : "w-12 h-12"
          } rounded-full object-cover`}
        />
      ) : (
        <span
          className={`${
            profile ? "w-32 h-32" : "w-12 h-12"
          } bg-red-300 text-sm flex font-semibold justify-center items-center rounded-full bg-primary`}
        >
          {userInitials}
        </span>
      )}
    </>
  );
};
