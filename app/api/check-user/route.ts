import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);


export async function POST(request: Request) {
    try {

        const { email } = await request.json();

        const { data, error } =
            await supabase.auth.admin.listUsers();

        const userExists = data.users.some(
            (user) => user.email === email
        );

        console.log(data);
        console.log(error);

        return NextResponse.json({
            exists: userExists,
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            { error: "Server Error" },
            { status: 500 }
        );
    }
}