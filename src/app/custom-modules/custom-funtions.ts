export function checkNull(data: any) {
    return (data != null)
        && (data != undefined)
        && (data != '')
        && ((Array.isArray(data) ? data.length > 0 : true))
        && (typeof data == 'object' ? (Object.keys(data).length > 0) : true)
}


export const colors = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
]