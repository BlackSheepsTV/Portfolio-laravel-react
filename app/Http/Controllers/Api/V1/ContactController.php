<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller 
{
    public function contact(Request $request) {

        $request->validate([
        'firstname' => 'bail|required|alpha',
        'name' => 'bail|required|alpha',
        'entreprise' => 'bail|required|alpha_num',
        'email' => 'required|email:rfc,dns|unique:users',
        'phone' => 'required|numeric',
        'subject' => 'required|alpha',
        'message' => 'required|max:400',
        ]);

        $contact = Contact::create ([
        'firstname' => $request->firstname,
        'name' => $request->name,
        'entreprise' => $request->entreprise,
        'email' => $request->email,
        'phone' => $request->phone,
        'subject' => $request->subject,
        'message' => $request->message,
        
        ]);

        return response()->json(['success'=>'Votre message à bien été envoyé !'], 200);
          
    }
}
