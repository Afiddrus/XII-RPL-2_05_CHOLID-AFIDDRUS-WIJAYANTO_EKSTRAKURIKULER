const Ekstrakurikuler = require('../models/Ekstrakurikuler')


module.exports = {
  // get all users
    index: async (req, res) => {
      try {
        const ekstras = await Ekstrakurikuler.find()
        if(ekstras.length > 0){
          res.status(200).json({
            status:true,
            data:ekstras,
            method: req.method,
            url: req.url
          })
        }else{
          res.json({
            status: false,
            message: "Data Masih Kosong"
          })
        }

      } catch (error) {
        res.status(400).json({success: false})
      }

        },
        // get a user
        show: async  (req, res) => {
          try {
              const ekstra = await Ekstrakurikuler.findById(req.params.id)
              res.json({
                status:true,
                data:ekstra,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat"
              })
          } catch (error){
            res.status(400).json({success: false})
          }

        },
        store: async  (req, res) => {
          try {
            const ekstra = await Ekstrakurikuler.create(req.body)
            res.status(200).json({
              status:true,
              data:ekstra,
              method: req.method,
              url: req.url,
              message: "Data berhasil ditambahkan"
            })
          } catch (error) {
            res.status(400).json({success: false})
          }

          },
          update: async  (req, res) => {
            try {
                const ekstra = await Ekstrakurikuler.findByIdAndUpdate(req.params.id, req.body, {
                  new: true,
                  runValidators: true
                })
                res.json({
                  status:true,
                  data:ekstra,
                  method: req.method,
                  url: req.url,
                  message: "Data berhasil diubah"
                })
            } catch (error){
              res.status(400).json({success: false})
            }

          },
          delete: async (req, res) => {
            try {
                await Ekstrakurikuler.findByIdAndDelete(req.params.id)
                res.json({
                  status:true,
                  method: req.method,
                  url: req.url,
                  message: "Data berhasil dihapus"
                })
            } catch (error) {
              res.status(400).json({success: false})
            }
          }
}