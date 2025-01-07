export function getMysqlDateTime(date) 
{
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

export function getDateFromMysqlDateTime(mysqlDateTime) 
{
    return new Date(mysqlDateTime);
}