<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'email' => 'required|string|max:40|email|unique:users',
            'password' => 'required|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/|string|min:8',
            'pol'=>'in:m,z',
            'odeljenje_id'=>'required',
            'admin'=>'required|boolean',

            
        ]);


        if ($validator->fails())
            return response()->json($validator->errors());

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'pol'=>$request->pol,
            'odeljenje_id'=>$request->odeljenje_id,
            'admin'=>$request->admin,
        ]);

        $token = $user->createToken('registration_token')->plainTextToken;

        return response()->json(['success'=>true, 'data' => $user, 'access_token' => $token, 'token_type' => 'Bearer']);
    }
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()
                ->json(['success'=> false]);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('token_login')->plainTextToken;

        return response()
            ->json(['success'=>true,'user_id'=>$user->id, 'access_token' => $token, 'token_type' => 'Bearer',]);
    }
    
    public function logout()
    {
        $user = Auth::user();
        $user->tokens->each(function($token, $key) {
            $token->delete();
        });
        return [
            'message' => 'You have successfully logged out!'
        ];
    }
}
