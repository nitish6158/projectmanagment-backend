export const UserRolesEnum={
    ADMIN:"admin",
    USER:"user",
    PROJECT_ADMIN :"project_admin",
    MEMBER:"member",
}
export const AvailableRoles=Object.values(UserRolesEnum)
export const TaskStatusEnum={
    TODO:"todo",
    IN_PROGRESS:"in_progress",
    DONE:"done",
}
export const AvailableTaskStatus=Object.values(TaskStatusEnum)