export default function (): object{
    const currentTime = new Date().toISOString()

    return {
        status: 'OK',
        currentTime: currentTime
    }
}