import supabase from "../db.js";

export async function createServiceForMaster(serviceName: string, masterId: string) {
    const { data, error } = await supabase
        .from('services')
        .insert({
            title: serviceName,
            master_id: masterId,
            price: Math.floor(Math.random() * 100) + 1,
            duration_minutes: 60,
        })
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
}