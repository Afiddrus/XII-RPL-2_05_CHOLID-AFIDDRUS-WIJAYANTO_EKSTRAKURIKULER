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
        store: async (req, res) => {
          try {
            const ekstra = await Ekstrakurikuler.create(req.body)
            res.status(200).json({
              status: true,
              data: ekstra,
              method: req.method,
              url: req.url,
              message: "Data berhasil ditambahkan"
            })
          } catch (error) {
            if (error.name === 'ValidationError') {
              // Extract specific validation errors from 'error.errors' and send appropriate responses
              const validationErrors = Object.keys(error.errors).map(key => {
                return { field: key, message: error.errors[key].message };
              });
              res.status(400).json({
                success: false,
                errors: validationErrors
              });
            } else {
              res.status(500).json({ success: false, message: error.message });
            }
          }
        },        
        update: async (req, res) => {
          try {
            const ekstra = await Ekstrakurikuler.findByIdAndUpdate(req.params.id, req.body, {
              new: true,
              runValidators: true
            })
            if (!ekstra) {
              return res.status(404).json({ success: false, message: "Data not found" });
            }
            res.json({
              status: true,
              data: ekstra,
              method: req.method,
              url: req.url,
              message: "Data berhasil diubah"
            })
          } catch (error) {
            if (error.name === 'ValidationError') {
              const validationErrors = Object.keys(error.errors).map(key => {
                return { field: key, message: error.errors[key].message };
              });
              return res.status(400).json({
                success: false,
                errors: validationErrors
              });
            } else {
              res.status(500).json({ success: false, message: error.message });
            }
          }
        },
        
        delete: async (req, res) => {
          try {
            const deletedEkstra = await Ekstrakurikuler.findByIdAndDelete(req.params.id)
            if (!deletedEkstra) {
              return res.status(404).json({ success: false, message: "Data not found" });
            }
            res.json({
              status: true,
              method: req.method,
              url: req.url,
              message: "Data berhasil dihapus"
            })
          } catch (error) {
            res.status(400).json({ success: false, message: error.message });
          }
        }
        
}