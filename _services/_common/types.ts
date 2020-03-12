export interface User {
    id: number,
    username: string,
    password: string,
    name: string,
    email: string
}

export interface Location {
    id: number,
    location_name: string
}

export interface Place {
    id: number,
    place_name: string
}

export interface Criteria {
    id: number,
    criteria_name: string
}

export interface CriteriaDetail {
    id: number,
    criteria_id: number,
    criteria_name: string,
    location_id: number,
    place_id: number,
    user_id: number,
    assigned_user_id?: number,
    measure_value: string,
    note: string,
    target_date?: Date,
    curr_date: Date
}

export interface ResponseObject {
    success: boolean,
    data: any
}

export interface AssignedCriteriaDetail {
    id: number,
    criteria_id: number,
    location_id: number,
    place_id: number,
    user_id: number,
    assigned_user_id?: number,
    measure_value: string,
    note: string,
    target_date?: Date,
    curr_date: Date,
    criteria_name: string,
    place_name: string,
    location_name: string
}