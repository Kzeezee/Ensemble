// Various interfaces used in the web app

export interface PersonCreationDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface EventCreationDTO {
    title: string;
    summary: string;
    startDate: number;
    endDate: number;
}

export interface EventDetailsDTO {
    id: number;
    title: string;
    summary: string;
    organisers: string;
    eventCode: string;
    startDate: number;
    endDate: number;

}