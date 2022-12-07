<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="icon" href="{{ asset('storage/Gaetan.jpg') }}" type="image/jpg" >
        <title>Portfolio - Gaëtan ETAME</title>
        
        <meta
        name="description"
        content="Bienvenue sur le portfolio intéractif de Gaëtan ETAME, développeur web fullstack junior."
        />
        @viteReactRefresh
        @vite('resources/js/app.jsx')
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
