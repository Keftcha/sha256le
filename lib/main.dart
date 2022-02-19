import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'sha256le',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: Scaffold (
        appBar: AppBar(
          title: const Text('sha256le'),
        ),
        body: const Sha256Form(),
      ),
    );
  }
}

class Sha256Form extends StatefulWidget {
  const Sha256Form({Key? key}) : super(key: key);

  @override
  _Sha256FormState createState() => _Sha256FormState();
}

class _Sha256FormState extends State<Sha256Form> {
  final _formKey = GlobalKey<FormState>();
  String guess = "";

  void _submit() {
    // Validate returns true if the form is valid, or false otherwise.
    if (_formKey.currentState!.validate()) {
      // If the form is valid, display a snackbar. In the real world,
      // you'd often call a server or save the information in a database.
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(guess)),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Padding(
        padding: EdgeInsets.all(10),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Flexible(
              child: SizedBox(
                width: 1000,
                height: 100,
                child: TextFormField(
                  // The validator receives the text that the user has entered.
                  validator: (_) {
                    if (guess == null || guess.isEmpty || guess.runes.length != 64) {
                      return 'Please, enter a sha256 (must be 64 caracters long)';
                    }
                    return null;
                  },
                  decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: 'sha256',
                  ),
                  maxLength: 64,
                  onChanged: (value) {setState(() {guess = value;});},
                  onFieldSubmitted: (_) {_submit();},
                ),
              ),
            ),
            ElevatedButton(
              onPressed: () {_submit();},
              child: const Text('Check'),
              style: ElevatedButton.styleFrom(
                fixedSize: const Size(80, 50)
              ),
            ),
          ],
        ),
      ),
    );
  }
}
